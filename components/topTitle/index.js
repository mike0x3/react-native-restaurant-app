import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

import mainStyle from '../mainStyles/mainStyles';


const Title = ({ text }) => (
    <View style={styles.container}>
        <Text style={mainStyle.title}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Title;