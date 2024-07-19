import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingtext}>FancyCard</Text>
      <ScrollView horizontal>
        <View style={styles.card}>
          <Image
          source={{
            uri:'https://ichef.bbci.co.uk/news/976/cpsprodpb/1d36/live/1304a800-365f-11ef-88f3-6b74aebc5fc9.jpg.webp'
          }}
          style={styles.cardImage}
          />
          <Text style={styles.title}>Ro-Ko Moments</Text>
          <Text style={styles.description}>Skipper Rohit and Virat kohli held the nations pride </Text>
          <Text style={styles.slide}>Slide to see more.. </Text>

        </View>
        <View style={styles.card}>
          <Image
          source={{
            uri:'https://images.hindustantimes.com/img/2024/07/09/550x309/TOPSHOT-Cricket-WC-2024-T20-IND-PAK-2_1720520191706_1720520202626.jpg'
          }}
          style={styles.cardImage}
          />
          <Text style={styles.title}>Badshah Boooom Moments</Text>
          <Text style={styles.description}>Skipper Rohit Applauds Bumrah on his wickets </Text>
          <Text style={styles.slide}>Slide to see more.. </Text>

        </View>
        <View style={styles.card}>
          <Image
          source={{
            uri:'https://c.ndtvimg.com/2024-07/d1dqeeto_suryakumar-catch_625x300_02_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605'
          }}
          style={styles.cardImage}
          />
          <Text style={styles.title}>SKY Moments</Text>
          <Text style={styles.description}>surya kumar takes an heart warming catch</Text>
          <Text style={styles.slide}>Slide to see more.. </Text>

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
      card:{
        flex:1,
        justifyContent:'center',
        gap:15,
        borderRadius:8,
        margin:5,
        padding:5,
        borderWidth:2,
        borderColor:'white',
        elevation:5,
        backgroundColor:'#B1AFAD',
        width:280,
        shadowOffset:{
          height:2,
          width:2
        },
        shadowColor:'purple'
        

        
      },
      cardImage:{
        height:200,
        width:270,
        borderRadius:5,
        marginHorizontal:'auto'
        
        
      },
      title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#FE6400'
      },
      description:{
        fontSize:16,
       
      },
      slide:{
        color:'#44A4D2',

      }
})