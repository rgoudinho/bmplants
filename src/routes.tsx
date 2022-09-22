import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from "./pages/Login";
import Register from "./pages/Register";
import ListPlant from "./pages/ListPlant";
import Profile from "./pages/Profile";
import SearchPlantsDiseases from "./pages/SearchPlantsDiseases";
import Plant from "./pages/Plant";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export enum ScreenNames {
  Login = "Login",
  Register = "Register",
  RoutesTab = "RoutesTab",
  List = "List",
  Profile = "Profile",
  Search = "Search",
  Plant = "Plant",
}

function RoutesTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'List') {
          iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
        } else if (route.name === 'NewWork') {
          iconName = focused ? 'plus-circle' : 'plus-circle-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'account-box' : 'account-box-outline';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'cornflowerblue',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name={ScreenNames.List} component={ListPlant} />
      <Tab.Screen name={ScreenNames.Search} component={SearchPlantsDiseases} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Login} component={Login} />
        <Stack.Screen name={ScreenNames.Register} component={Register} />
        <Stack.Screen name={ScreenNames.Plant} component={Plant} />
        <Stack.Screen name={ScreenNames.RoutesTab} component={RoutesTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
