import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './Components/FlatCards'
import ElevatedCards from './Components/ElevatedCards'
import FancyCard from './Components/FancyCard'
import ActionCard from './Components/ActionCard'
import TestimonialCard from './Components/TestimonialCard'

const App = () => {
  return (
    <SafeAreaView >
     <ScrollView>
       <FlatCards></FlatCards>
       <ElevatedCards></ElevatedCards>
       <FancyCard/>
       <ActionCard/>
       <TestimonialCard/>
     </ScrollView>
    </SafeAreaView>
  )
}

export default App