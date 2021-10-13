import React, { Component } from 'react';
import { Linking, Button, Image, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://media.discordapp.net/attachments/886908599635443712/886911143040385044/vqtou4kyf9m61-1.jpg?width=426&height=593" }} style={{ width: 360, height: 500 }} />
        <Button
          title="Please Sub!"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Here is my discord server"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
        <Button
          title="Hellcat#8126"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.mainConatinerStyle}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://www.youtube.com/c/oofYTP');
  };

  _handleOpenWithWebBrowser = () => {
    Linking.openURL('https://discord.gg/YU7h8ZpF9W');
  };

  _handleOpenWithWebBrowser = () => {
    Linking.openURL('https://discord.gg/YU7h8ZpF9W');
  };
}

 const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

const fadeOut = () => {
   // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 5000,
    }).start();
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#808080',
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mainConatinerStyle: {
      flexDirection: 'column',
      flex: 1
  },floatingMenuButtonStyle: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 35
  }
  },
  button: {
    marginVertical: 10,
  },
});