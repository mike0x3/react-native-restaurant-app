import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/home';
import InfoScreen from './components/info';
import NewsScreen from './components/news';
import MenuScreen from './components/menu';
import GalleryScreen from './components/gallery';

const Tab = createBottomTabNavigator();

class App extends React.Component{
  render() {
    return(
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen  name='Menu' component={MenuScreen} />
          <Tab.Screen  name='News' component={NewsScreen} />
          <Tab.Screen  name='Home' component={HomeScreen} />
          <Tab.Screen  name='Gallery' component={GalleryScreen} />
          <Tab.Screen  name='Info' component={InfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;