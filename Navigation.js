import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";



const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
      <HomeStackNavigator.Navigator
          initialRouteName="HomeScreen"
      >
          <HomeStackNavigator.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerTitleAlign:'center'}}
          />
          <HomeStackNavigator.Screen
              name="Stack"
              component={StackScreen}
              options={{
                  headerBackTitleVisible: false,
              }}
          />
      </HomeStackNavigator.Navigator>
  )
}   



const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator  initialRouteName="Home"
            screenOptions= {{
            tabBarActiveTintColor: 'purple',  }}>


        <Tab.Screen name="Home" component={MyStack} 
         options={{headerTitleAlign:'center',  tabBarIcon: ({ color,  }) => (
          <MaterialCommunityIcons name="home" color={color} size={30} /> ),  tabBarLabel: 'Feed', tabBarBadge: 10,
          headerShown: false}} />

        <Tab.Screen name="Settings" component={SettingsScreen} 
         options={{headerTitleAlign:'center', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="brightness-5" color={color} size={30} /> )}} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}