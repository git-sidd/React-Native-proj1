import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingtext}>FlatCards</Text>
        <View style={styles.container}>
          <View style={styles.cardone}>
            <Text>red</Text>
          </View>
          <View style={styles.cardtwo}>
            <Text>green</Text>
          </View>
          <View style={styles.cardthree}>
            <Text>blue</Text>
          </View>
          <View style={styles.cardtwo}>
            <Text>green</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingtext:{
    fontSize:24,
    margin:10
  },
  container:{
    marginVertical:5,
    marginHorizontal:10,
    flex:1,
    flexDirection:'row',
    
    
  },
  cardone:{
    backgroundColor:'red',
    borderRadius:4,
    height:100,
    width:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    margin:8,
  },
  cardtwo:{
    backgroundColor:'green',
    height:100,
    width:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderRadius:4,
    margin:8,
  },
  cardthree:{
    backgroundColor:'blue',
    height:100,
    width:100,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderRadius:4,
    margin:8,
  }
})