/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Honeywell from 'react-native-honeywellN43XX'

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  openHoneywell() {
    console.log(Honeywell)
    const response = Honeywell.open()
  }

  closeHoneywell() {
    console.log(Honeywell)
    const response = Honeywell.close()
  }

  startHoneywell() {
    console.log(Honeywell)
    const response = Honeywell.start()
  }


  stopHoneywell() {
    console.log(Honeywell)
    const response = Honeywell.stop()
  }


  render = () => (
    <Image
      source={require('../../images/login.jpg')}
      style={[AppStyles.containerCentered, AppStyles.container, styles.background]}
    >
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Open'}
            icon={{ name: 'lock' }}
            onPress={this.openHoneywell}
          />
        </View>
      </View>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Start'}
            icon={{ name: 'face' }}
            onPress={this.startHoneywell}
          />
        </View>
      </View>

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Stop'}
            icon={{ name: 'face' }}
            onPress={this.stopHoneywell}
          />
        </View>
      </View>

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]}>
          <Button
            title={'Close'}
            icon={{ name: 'face' }}
            onPress={this.closeHoneywell}
          />
        </View>
      </View>

      <Spacer size={15} />

      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>

        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </Image>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
