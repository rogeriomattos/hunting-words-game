import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Easy } from './src/pages/Easy';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <Easy/>
      </View>
    );
  }
}