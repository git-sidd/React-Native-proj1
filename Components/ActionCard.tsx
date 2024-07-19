import { Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function OpenWebsite(websitelink:string){
        Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text style={styles.headingtext}>ActionCard</Text>
      <View style={styles.card}>
            
            <Image
                source={{
                    uri:'https://www.pccoer.com/images/about-pccoer.webp',
                }}
                style={styles.cardimage}

            />
            <Text style={styles.title}>PCCOE&R</Text>
            <Text numberOfLines={3} style={styles.description} >Pimpri Chinchwad College of Engineering & Research (PCCOE&R) was established in 2014 under the aegis of Pimpri Chinchwad Education Trust (PCET). Presently the Institute offers NBA accredited UG Programmes in four disciplines viz. Civil Engineering, Computer Engineering, E&TC Engineering, Mechanical Engineering and also offers Information Technology. PCCOE&R is affiliated to Savitribai Phule Pune University (SPPU), Pune and is approved by A.I.C.T.E., New Delhi, Govt. of Maharashtra, D.T.E, Mumbai. Recently the Institute has been accredited with A++ grade by NAAC in the very first cycle of accreditation.
            </Text>
            <TouchableOpacity onPress={()=>OpenWebsite('https://www.pccoer.com/about-pccoer.php')}>
                <Text style={styles.readmore}>Read More..</Text>    
            </TouchableOpacity> 
      </View>
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
        gap:10,
        backgroundColor:'gray',
        margin:8,
        borderWidth:3,
        borderColor:'white',
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        marginBottom:10
      },
      title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
      },
      description:{},
      cardimage:{
        height:200,
        borderTopRightRadius:8,
        borderTopLeftRadius:8
        
      },
      readmore:{
        color:'blue',
        textAlign:'center',
        backgroundColor:'white',
        margin:'auto',
        padding:8,
        borderRadius:8
      }
      
})