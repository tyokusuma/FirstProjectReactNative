/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

 export default class AwesomeProject extends Component {
     render() {
         return (
             <View style={styles.container}>

                 <Text style={styles.welcome}>
                     Aristyo Hadikusuma
                 </Text>
                 <Text style={styles.instructions}>
                     Refactory Batch 1
                 </Text>
                 <Text style={style.instructions}>
                     Pejuang Camorra Batch 1
                 </Text>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF'
     },
     welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
         fontWeight: 'bold'
     },
     instructions: {
         textAlign: 'center',
         color: '#333333',
         marginBottom: 5
     },
     foto: {
         height: 250,
         width: 175,
         borderRadius: 10;
         marginBottom: 14;
     }
 });

 AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
