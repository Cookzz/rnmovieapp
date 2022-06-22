import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';
import Booking from './pages/Booking';

const Stack = createNativeStackNavigator();

const MoviesStack = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="Movies"
    screenOptions={{
      animation: "slide_from_right",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#DB1F48"
      },
      headerTitleStyle: {
        color: "#FFF"
      },
    }}
  >
    <Stack.Screen 
      name="Movies"
      options={{
        title: "Movies"
      }}
      component={Movies} 
    />
    <Stack.Screen 
      name="MoviesDetails" 
      options={({ navigation }) => ({
        title: "Details",
        headerLeft: () => (
          <TouchableOpacity onPress={()=>{ navigation.goBack() }}>
            <MaterialIcons name={'keyboard-arrow-left'} size={35} color="#FFF" />
          </TouchableOpacity>
        )
      })}
      component={MoviesDetails} 
    />
    <Stack.Screen 
      name="BookingPage"
      options={({ navigation }) => ({
        title: "Booking",
        headerLeft: () => (
          <TouchableOpacity onPress={()=>{ navigation.goBack() }}>
            <MaterialIcons name={'keyboard-arrow-left'} size={35} color="#FFF" />
          </TouchableOpacity>
        )
      })}
      component={Booking} 
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <MoviesStack />
  </NavigationContainer>
);

export default RootNavigator;