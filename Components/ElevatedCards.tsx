import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingtext}>ElevatedCards</Text>
        <ScrollView horizontal={true}>
           <View style={styles.container}>
                <View style={[styles.card, styles.cardclr]} >
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardclr]} >
                    <Text>siddhesh</Text>
                </View>
                <View style={[styles.card, styles.cardclr]} >
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardclr]} >
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardclr]} >
                    <Text>more...</Text>
                </View>
           </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        margin:10
      },
      container:{
        flex:1,
        flexDirection:'row',
        gap:10,
        margin:10
        
      },
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:100,
        borderRadius:8,
        
        
        
      },
      cardclr:{
        backgroundColor:'gray',
        elevation:5 ,
        
        shadowOffset:{
            width:2,
            height:20
        },
        shadowColor:'purple'
      }
})