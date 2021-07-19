import React from "react";
import { View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import mainStyle from "../mainStyles/mainStyles";
import Title from "../topTitle";
import data from './data';
import BlockElement from "../blockElement";
import FullInfoRender from "../fullInfoRender";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' component={NewsScreen} />
            <Stack.Screen name='fullInfo' component={FullInfoRender} />
        </Stack.Navigator>
    )
}

const NewsScreen = ({ navigation }) => {
    return(
        <View style={mainStyle.container}>
            <Title text='NEWS' />
            <FlatList 
                data={data}
                renderItem={({item}) => <BlockElement item={item} navigation={navigation}/>}
            />
        </View>
    )
}

export default MyStack;