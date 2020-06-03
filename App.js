/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import {
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const App: () => React$Node = () => {
  const barHeight = responsiveHeight(33);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.head}>
              <Text style={styles.headTitle}>React Native @ BigPanda Meetup</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'blue'}}>
              <Text style={styles.sectionTitle}>Welcome</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'green'}}>
              <Text style={styles.sectionTitle}>To</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'yellow'}}>
              <Text style={styles.sectionTitle}>Our</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'orange'}}>
              <Text style={styles.sectionTitle}>Meetup</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'darkviolet'}}>
              <Text style={styles.sectionTitle}>Let's</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'violet'}}>
              <Text style={styles.sectionTitle}>Get</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'brown'}}>
              <Text style={styles.sectionTitle}>This</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'red'}}>
              <Text style={styles.sectionTitle}>Party</Text>
          </View>
          <View style={{height: barHeight, backgroundColor: 'black'}}>
              <Text style={styles.sectionTitle}>Started</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  headTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 50,
    marginTop: 50
  },
  sectionTitle: {
    alignSelf: 'center',
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
    color: Colors.white
  },
  blueBg:{
    backgroundColor: 'blue'
  },
  yellowBg:{
    backgroundColor: 'yellow'
  },
  greenBg:{
    backgroundColor: 'green'
  },
  orangeBg:{
    backgroundColor: Colors.orange
  }
});

export default App;
