import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../news/styles';

const BlockElement = ({ item, navigation }) => (
    <View> 
        <TouchableOpacity onPress={() => navigation.navigate('fullInfo', item)} style={styles.componentContainer}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

export default BlockElement;