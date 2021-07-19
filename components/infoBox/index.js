import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const InfoBox = () => (
    <View style={styles.infoBox}>
         <Image 
            source={require('../../assets/images/logo1.jpg')}
             style={styles.logo}
        />
        <Text style={styles.title}>DA MAURO</Text>
        <Text style={styles.title2}>PRODUZIONE PROPRIA</Text>
    </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        fontWeight: '400',
    },
    title2: {
        fontSize: 13,
    },  
    logo: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    infoBox: {
        alignItems: 'center',
        marginBottom: 5,
    },
})

export default InfoBox;