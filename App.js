import React, {Component} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Components/Screens/HomeScreen';
import newMedScreen from './Components/Screens/NewMed';
import OptionsScreen from './Components/Screens/OptionsScreen';
import ThemeScreen from './Components/Screens/ThemeScreen';

import { MainContext } from './Components/MainContext';
import { ThemeProvider } from './Components/utils/ThemeManager';

const key = "state";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="New Medication" component={newMedScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator()
function MyDrawer(){
  return(
    <Drawer.Navigator 
    screenOptions={{headerShown: false, swipeEdgeWidth: 400}}>
      <Drawer.Screen name = "Home" component={MyStack} />
      <Drawer.Screen name = "Options" component={MySettings} />
    </Drawer.Navigator>
  )
}

const SettingsStack = createStackNavigator()
function MySettings(){
  return(
    <SettingsStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={OptionsScreen}>
      <SettingsStack.Screen name = "Settings" component={OptionsScreen} />
      <SettingsStack.Screen name = "Themes" component={ThemeScreen} />
    </SettingsStack.Navigator>
  )
}

class App extends Component{

  // Creates the initial state of meds, an empty array
  state = {
    meds: null,
    setMeds: this.setMeds
  }

  //Adds a new medication to the existing list of medications
  setMeds = (meds) => {
    this.setState({meds});
  };

  render(){
    return(
      <ThemeProvider>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

export default App;
