import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageLayout from "react-native-image-layout";

import Title from '../topTitle';
import data from './data';

export default class GalleryScreen extends React.Component {

  render() {
    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <Title text='GALLERY' />
            <ImageLayout
                images={data}
            />
        </View>
    );
}
}