import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Feed from './screens/Feed'
import Notifications from './screens/Notifications'
import Settings from './screens/Settings'
import StackDetails from './screens/homeStack/StackDetails'

import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Following from './screens/TopTabScreen/Following'
import More from './screens/TopTabScreen/More'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Second from './screens/Drawer/Second'






//-----------------------Drawer---------------------
const Drawer = createDrawerNavigator()

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First" component={HomeStackGroup} options={{ headerShown: false }} />
      <Drawer.Screen name="Second" component={Second} />
    </Drawer.Navigator>
  )
}
//-----------------------Stack---------------------
const HomeStack = createNativeStackNavigator()
function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} >
      <HomeStack.Screen name='TabGroup' component={TabGroup} />
      <HomeStack.Screen name='StackDetails' component={StackDetails} />
    </HomeStack.Navigator>
  )
}
//-----------------------TopTab---------------------
const TopTab = createMaterialTopTabNavigator()

function TopTabGroup() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={Feed} />
      <TopTab.Screen name="Following" component={Following} />
      <TopTab.Screen name="More" component={More} />
    </TopTab.Navigator>
  )
}

//-----------------------Tabs---------------------
const Tab = createBottomTabNavigator()
function TabGroup() {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'ios-notifications-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ width: 40, height: 40, marginLeft: 10, borderRadius: 100, overflow: 'hidden' }}>
              <Image
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
                source={{ uri: "https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg" }} />
            </TouchableOpacity>
          )
        }
      })}
    >
      <Tab.Screen name="Main" component={TopTabGroup} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer >
      <DrawerGroup />
    </NavigationContainer>
  )
}

export default Navigation