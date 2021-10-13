import React, { Component } from 'react';
import { Linking, Button, Image, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { Audio } from 'expo';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://media1.giphy.com/media/KdC9XVrVYOVu6zZiMH/giphy.gif?cid=ecf05e47b60j05dnerwn1hukgt5faobh0jtwhfrpdfgkrxli&rid=giphy.gif&ct=g" }} style={{ width:358, height: 510 }} />
        <Button
          title="Happy birthday  :)"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="What are there ages?"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
        <Button
          title="Who is the birthday for?"
          onPress={this._handleOpenWithLinking}
          style={styles.container}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://www.youtube.com/c/oofYTP');
  };

  _handleOpenWithWebBrowser = () => {
    Linking.openURL('https://the-jager.itch.io/');
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
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#90EE90',
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  button: {
    marginVertical: 10,
  },
});