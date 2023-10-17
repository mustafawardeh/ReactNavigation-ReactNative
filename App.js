import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation/>
      <StatusBar/>
    </SafeAreaView>
  );
}


