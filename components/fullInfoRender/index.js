import React from 'react';
import { Platform, ScrollView, Text, Image, TouchableOpacity, View } from 'react-native';

import HeaderBackButton from '../headerBack';
import styles from '../news/styles';
import mainStyle from '../mainStyles/mainStyles';

const shareLink = (type, titolo) => {
    if (type === 'sms') {
        if (Platform.OS === 'android') {
            Linking.openURL('sms:?body=Hey guarda, al ristorante da Mauro hanno: ' + titolo)
        } else if (Platform.OS === 'ios') {
            Linking.openURL('sms:&body=Hey guarda, al ristorante da Mauro hanno: ' + titolo)
        }
    } else {
        Linking.openURL('mailto:?subject=News&body=Hey guarda, al ristorante da Mauro hanno: ' + titolo)
    }
}

const FullInfoRender = ({ route, navigation }) => (
    <View style={mainStyle.container}>
        <ScrollView style={styles.scrollblock}>
            <HeaderBackButton text='NOTIZIA' navigation={navigation} />
            <Image source={route.params.image} style={styles.pageImage} />
            <Text style={styles.title}>{route.params.title}</Text>
            <Text style={styles.elementText}>{route.params.text}</Text>
        </ScrollView>
        <View style={styles.shareBlock}>
            <Text style={styles.shareTitle}>Invia ad un amico</Text>
            <View style={styles.block}>
                <TouchableOpacity onPress={() => shareLink('email', route.params.title)}>
                    <View style={styles.sharebox}>
                        <Image source={require('../../assets/icons/email.png')} style={styles.shareImage} />
                        <Text style={styles.shareText}>MAIL</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => shareLink('sms', route.params.title)}>
                    <View style={styles.sharebox}>
                        <Image source={require('../../assets/icons/sms.png')} style={styles.shareImage} />
                        <Text style={styles.shareText}>SMS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

export default FullInfoRender;