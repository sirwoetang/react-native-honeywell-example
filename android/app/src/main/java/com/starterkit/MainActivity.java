package com.starterkit;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.device.ScanDevice;
import android.util.Log;
import android.widget.EditText;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    ScanDevice sm;
    private final static String SCAN_ACTION = "scan.rcv.message";
    private String barcodeStr;
    private EditText showScanResult;

    @Override
    protected String getMainComponentName() {
        return "StarterKit";
    }

    private BroadcastReceiver mScanReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            Log.i("HONEY", "SUCCESS RECEIVE");
            Log.i("HONEY", intent.toString());
            byte[] barocode = intent.getByteArrayExtra("barocode");
            int barocodelen = intent.getIntExtra("length", 0);
            byte temp = intent.getByteExtra("barcodeType", (byte) 0);
            Log.i("HONEY", "----codetype--" + temp);
            barcodeStr = new String(barocode, 0, barocodelen);
            Log.i("HONEY", barcodeStr);
//            sm.stopScan();
        }

    };

    @Override
    protected void onPause() {
        // TODO Auto-generated method stub
        super.onPause();
//        if(sm != null) {
//            sm.stopScan();
//        }
        unregisterReceiver(mScanReceiver);
    }

    @Override
    protected void onResume() {
        // TODO Auto-generated method stub
        super.onResume();
        IntentFilter filter = new IntentFilter();
        filter.addAction(SCAN_ACTION);
        registerReceiver(mScanReceiver, filter);
    }

    @Override
    protected void onStart() {
        super.onStart();
        IntentFilter filter = new IntentFilter();
        filter.addAction(SCAN_ACTION);
        registerReceiver(mScanReceiver, filter);
    }
}
