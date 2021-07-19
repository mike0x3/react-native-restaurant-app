import React from 'react';
import { Image, View, Text, Button, Linking } from 'react-native';

import Title from '../../components/topTitle';
import InfoBox from '../../components/infoBox';
import styles from './style';
import mainStyle from '../mainStyles/mainStyles';

const HomeScreen = () => (
    <View style={mainStyle.container}>
        <Title text='HOME' />
        <Image 
            source={require('../../assets/images/image1.jpg')} 
            style={styles.image} 
            resizeMode="contain"
        />
        <InfoBox />
        <Button title={'facebook'} color="#000" onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100010201175540')} />
        <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere vel purus sed pharetra. Nullam nec lobortis diam. 
            Maecenas fringilla tempus arcu, sed auctor libero ultricies vitae. Suspendisse in bibendum purus. Vivamus eget metus molestie, 
            scelerisque nulla eu, faucibus massa. Duis malesuada erat elit, id laoreet nisl vehicula vitae. Donec at augue quis est vestibulum semper. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </Text>
    </View>
)

export default HomeScreen;