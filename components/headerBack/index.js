import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import mainStyle from '../mainStyles/mainStyles';

const HeaderBackButton = ({ text, navigation }) => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icons/back.png')} style={styles.image} />
        </TouchableWithoutFeedback>
        <View style={styles.titleContainer}>
            <Text style={[mainStyle.title, styles.title]}>{text}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        height: 24,
        width: '10%',
        resizeMode: 'contain',
        marginRight: 'auto'
    },
    titleContainer: {
        width: '90%',
        paddingRight: '10%'
    },
    title: {
        lineHeight: 22,
    }

})

export default HeaderBackButton;