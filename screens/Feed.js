import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Feed = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable onPress={() => { }} >
          <Image source={require("../download.jpg")}
            style={{ width: 40, height: 40,margin:'auto' ,objectFit:"contain", borderRadius: 100}}
          />
        </Pressable>
      },
    });
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.viewContainer}>
        <FlatList contentContainerStyle={{ justifyContent: 'center', flex: 1, gap: 30 }}
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center', // Center horizontally within the parent FlatList
  },
  textStyle: {
    fontSize: 33,
  },
})

export default Feed


