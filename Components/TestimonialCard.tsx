import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TestimonialCard() {
    const testimonials = [
        {
          name: "Rohit Sharma",
          photourl: "https://im.rediff.com/300-180/cricket/2023/dec/17rohit1.jpg",
          age: 36,
          iplFranchise: "Mumbai Indians"
        },
       
        {
          name: "Jasprit Bumrah",
          photourl: "https://images.hindustantimes.com/img/2022/04/14/550x309/bumrah-mi_1649926569390_1649926573236.jpg",
          age: 30,
          iplFranchise: "Mumbai Indians"
        },
        {
          name: "Suryakumar Yadav",
          photourl: "https://imgs.search.brave.com/vrJcCWgiAWtHqDw_bOMAp4Qyf26orvj_e4OndUoEAsk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L1N1cnlha3Vt/YXJfWWFkYXZfaW5f/UE1PX05ld19EZWxo/aS5qcGc",
          age: 33,
          iplFranchise: "Mumbai Indians"
        },
        {
          name: "Ravindra Jadeja",
          photourl: "https://imgs.search.brave.com/MW3E7DLzUPWOZBZat2lgENqkjH3vLqNsVEaMq1GM630/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzJjL1BNX1Nocmlf/TmFyZW5kcmFfTW9k/aV93aXRoX1Jhdmlu/ZHJhX0phZGVqYV8o/Q3JvcHBlZCkuanBn",
          age: 35,
          iplFranchise: "Chennai Super Kings"
        },
        {
          name: "MS Dhoni",
          photourl: "https://imgs.search.brave.com/R5xzhlVj0n6w8-jDLbQDf4OgXE_GBMP6ngqF3a3s0p8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MjI5ODg5Mi9waG90/by9jaGVubmFpLXN1/cGVyLWtpbmdzLWNh/cHRhaW4tbXMtZGhv/bmktYmVmb3JlLXRo/ZS1zdGFydC1vZi1p/cGwtdDIwLWNyaWNr/ZXQtbWF0Y2gtYmV0/d2Vlbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S0dBd2pZ/SE1EYkRnaHVJLVVP/dE1XdzA4a2lJNnMz/UjZ3bzF2am40VXRm/WT0",
          age: 42,
          iplFranchise: "Chennai Super Kings"
        }, {
          name: "Virat Kohli",
          photourl: "https://cdn-wp.thesportsrush.com/2022/04/bbbb2e2b-untitled-design-94.jpg?format=auto&w=384&q=75",
          age: 35,
          iplFranchise: "Royal Challengers Bangalore"
        }
      ];
      
      
      
  return (
    <View>
      <Text style={styles.headingtext}>TestimonialCard</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
            {
                testimonials.map(({name,photourl,age,iplFranchise})=>(
                    <View key={name} style={styles.card}>
                        <Image
                        source={{
                            uri:`${photourl}`
                        }}
                          style={styles.image}  
                        />
                        <Text style={styles.cardname}>Name: {name}</Text>
                        <Text style={styles.age}>Age: {age}</Text>
                        <Text style={styles.team}>Franchise: {iplFranchise}</Text>

                    </View>
                ))
            }
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
        marginVertical:10,
        marginHorizontal:6,
        
        
    },
    image:{
        height:250,
        width:200,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
    },
    card:{
      flex:1,
      gap:2,
      borderWidth:2,
      borderRadius:8,
      borderColor:'white',
      padding:5,
      marginVertical:5,
      backgroundColor:'gray',

      
    },
    cardname:{},
    age:{},
    team:{},
})