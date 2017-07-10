import Expo, { Constants } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Footer from './src/components/Footer';
import DisplayDate from './src/components/DisplayDate';
import Quote from './src/components/Quote';

const App = () => {
  return (
    <View style={styles.container} >
      <ScrollView>
        <Text>Some Text for now</Text>
      </ScrollView>
        <Footer />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});

Expo.registerRootComponent(App);
