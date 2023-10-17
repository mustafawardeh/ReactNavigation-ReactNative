import { View, Text, SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const Notifications = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text >Notifications</Text>
      <TouchableOpacity style={styles.BtnContainer}>
        <Text style={styles.TextStyle}>Open Drawer</Text>
        <Ionicons name="menu" style={styles.TextStyle} size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    gap:20
  },
  BtnContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    padding:10,
    width:300,
    height:50,
    borderRadius:10,
    backgroundColor:'rgba(0,0,0,0.25)',
  },
  TextStyle:{
    fontSize:26,
    fontWeight:"bold",

  }
})

export default Notifications