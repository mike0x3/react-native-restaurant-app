import React from 'react';
import { View, Text, Button, Image, FlatList, TextInput, ScrollView, TouchableOpacity, Linking, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import InfoBox from '../infoBox';
import Title from '../topTitle';
import mainStyle from '../mainStyles/mainStyles';
import data from './data';
import styles from './styles';
import LegalInfo from './legalInfo';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Home' component={InfoScreen} />
            <Stack.Screen name='LegalInfo' component={LegalInfo} />
        </Stack.Navigator>
    )
}

const openWeb = (type) => {
    if (type === 'website') {
        Linking.openURL('https://damauro.it/')
    } else if (type === 'facebook') {
        Linking.openURL('https://facebook.com/damauro/')
    } else if (type === 'maps') {
        Linking.openURL('https://www.google.com/maps/place/@41.9003579,12.4556042,12.35z/')
    } else if (type === 'mail') {
        Linking.openURL('mailto:info@damauro.it')
    } else if (type === 'phone') {
        Linking.openURL('tel:0985704400')
    }
}

const ContactElement = ({ item }) => {
    const { text, image, action } = item;
    return(
        <View>
            <TouchableWithoutFeedback onPress={() => openWeb(action)} >
                <View style={styles.contactContainer}>
                    <Text style={styles.contactText}>{text}</Text>
                    <Image style={styles.contactImage} source={image} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

class InfoScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            phone: '',
            mail: '',
            message: '',
        }
        this.openLegalScreen = this.openLegalScreen.bind(this);
    }
    handleName = (text) => {
        this.setState({ name: text})
    }
    handlePhone = (text) => {
        this.setState({ phone: text})
    }
    handleMail = (text) => {
        this.setState({ mail: text})
    }
    handleMessage = (text) => {
        this.setState({ message: text})
    }
    sendEmail = ( name, phone, mail, message ) => {
        alert('Messaggio a ' + name + ' mandato, testo: ' + message + ' telefono: ' + phone + ' , email: ' + mail)
    }
    changeCheck = (checked) => {
        this.setState({ check1: checked ? false : true})
    }
    outText = (check) => {
        return check ? 'mauro' : 'juan'
    }
    openLegalScreen = (type) => {
        const { navigate } = this.props.navigation;
        navigate('LegalInfo', { tipo: type })
    }

    render(){
        return(
            <ScrollView>
                <View style={mainStyle.container}>
                    <Title text='INFO' />
                    <InfoBox />
                    <View style={styles.line}></View>
                        <Text style={{ fontWeight: '600' }}>Orari di Apertura</Text>
                        <Text>Da lunedi alla domenica 12-24</Text>
                    <View style={styles.line}></View>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => <ContactElement item={item}/>}
                        keyExtractor={(item) => item.id}
                    />
                    <View style={styles.inputView}>
                        <Text style={styles.messageText}>SCRIVICI UN MESSAGGIO</Text>
                        <TextInput 
                            style={styles.input}
                            onChangeText={this.handleName} 
                            placeholder=' Nome'
                            placeholderTextColor='#000'
                            autoCapitalize = "sentences"
                            underlineColorAndroid = "transparent"
                        />
                        <TextInput 
                            style={styles.input}
                            onChangeText={this.handlePhone} 
                            placeholder=' Telefono'
                            placeholderTextColor='#000'
                            autoCapitalize = "none"
                            underlineColorAndroid = "transparent"
                        />
                        <TextInput 
                            style={styles.input}
                            onChangeText={this.handleMail} 
                            placeholder=' Email'
                            placeholderTextColor='#000'
                            autoCapitalize = "none"
                            underlineColorAndroid = "transparent"
                        />
                        <TextInput 
                            style={styles.textbox}
                            onChangeText={this.handleMessage} 
                            placeholder=' Testo'
                            placeholderTextColor='#000'
                            autoCapitalize = "sentences"
                            underlineColorAndroid = "transparent"
                            multiline={true}
                            numberOfLines={3}
                        />
                        <View style={{ marginTop: 1,}}>
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Cliccando Manda accetti i </Text>
                                <TouchableOpacity onPress={() => this.openLegalScreen('privacy')}>
                                    <Text style={{color: 'blue'}}>termini di privacy </Text>
                                </TouchableOpacity>
                                <Text>e di ricevere </Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.openLegalScreen('offerta')} >
                                    <Text style={{color: 'blue'}}>info commerciali</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.button} >
                            <Button color='#000000' title='Manda' onPress={() => this.sendEmail(this.state.name, this.state.phone, this.state.mail, this.state.message)} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default MyStack;