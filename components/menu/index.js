import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import mainStyle from "../mainStyles/mainStyles";
import Title from "../topTitle";
import data from './data';
import BlockElement from "../blockElement";
import FullInfoRender from "../fullInfoRender";

const Stack = createStackNavigator();

const TopBar = () => (
    <View style={menuStyles.dark}>
        <Text style={menuStyles.white}>DAI UNO SGUARDO AL NOSTRO MENU</Text>
    </View>
)

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={MenuScreen} />
            <Stack.Screen name='fullInfo' component={FullInfoRender} />
        </Stack.Navigator>
    )
}

const MenuScreen = ({ navigation }) => {
    return(
        <View style={mainStyle.container}>
            <Title text='MENU' />
            <TopBar />
            <FlatList 
                data={data}
                renderItem={({item}) => <BlockElement item={item} navigation={navigation}/>}
            />
        </View>
    )
}

const menuStyles = StyleSheet.create({
    dark: {
        backgroundColor: '#000',
        width: '100%',
        alignItems: 'center',
        padding: 5
    },
    white: {
        color: '#fff'
    }
})

export default MyStack;