import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Second = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center',alignItems:'center'}}>
        <Image width={200} height={200} resizeMode='fill' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBPb9bFgruTh5v0_xna_Z5fhJAC7FLHYX-OSYfrSqMQ&s'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Second