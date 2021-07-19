import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import styles from './styles';
import mainStyle from '../mainStyles/mainStyles';

const LegalInfo = ({ route, navigation }) => {
    if (route.params.tipo === 'privacy') {
        return(
            <View style={mainStyle.container}>
                <ScrollView>
                    <Text style={mainStyle.title}>TERMINI DI PRIVACY</Text>
                    <View style={styles.paragraph}>
                        <Text>
                            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu gravida eros. Morbi eget vulputate lorem. 
                            Donec vestibulum diam consectetur cursus consectetur. Nam vehicula elementum magna quis porttitor. Maecenas molestie 
                            a nisl non aliquet. Nullam faucibus purus quis ex consequat, non vulputate lorem sagittis. Nam in mauris consequat, 
                            pharetra mi vel, laoreet velit. Praesent interdum metus ut metus tempor, gravida pretium quam accumsan.
                         </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            2. Donec ligula arcu, vestibulum non quam tempus, iaculis consequat quam. Interdum et malesuada fames ac ante ipsum 
                            primis in faucibus. Phasellus tortor arcu, porttitor nec massa at, pharetra fermentum quam. Vestibulum ante ipsum primis 
                            in faucibus orci luctus et ultrices posuere cubilia curae; In aliquam nulla vel neque facilisis malesuada. Aliquam sit 
                            amet neque quis velit venenatis accumsan vitae non tortor. In felis nisi, pulvinar et sapien nec, blandit elementum nisl. 
                            Sed interdum risus in massa scelerisque congue. Vivamus faucibus purus a leo ornare scelerisque. Nulla sollicitudin, 
                            purus id suscipit ullamcorper, quam risus pharetra eros, ac fringilla tellus nibh quis purus. Aliquam augue tortor, 
                            porttitor eu bibendum eu, ullamcorper ac risus. Vivamus vestibulum est vitae dictum porttitor. Aenean cursus neque 
                            sed neque condimentum, sed efficitur lorem cursus. Vivamus placerat suscipit ligula, id aliquet eros. Aenean blandit 
                            eu augue quis pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            3. Aliquam non ligula et dolor bibendum sodales sed a turpis. Praesent sit amet nulla nibh. Suspendisse potenti. 
                            Morbi egestas placerat ex vel elementum. Proin id porttitor velit. Morbi vel neque non lorem fringilla laoreet vel 
                            quis turpis. Pellentesque nec consequat odio. Morbi et tortor nulla. Nunc interdum est at quam accumsan facilisis. 
                            Morbi sit amet bibendum sapien. Donec euismod nisi in dolor porttitor malesuada. Aliquam quis nisi vitae augue finibus 
                            convallis sed vitae diam. Quisque ac pretium nulla. Vestibulum sed arcu felis. Donec in vulputate risus.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu gravida eros. Morbi eget vulputate lorem. 
                            Donec vestibulum diam consectetur cursus consectetur. Nam vehicula elementum magna quis porttitor. Maecenas molestie 
                            a nisl non aliquet. Nullam faucibus purus quis ex consequat, non vulputate lorem sagittis. Nam in mauris consequat, 
                            pharetra mi vel, laoreet velit. Praesent interdum metus ut metus tempor, gravida pretium quam accumsan.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                        5. Fusce risus mauris, sollicitudin a tincidunt eu, ultrices at dui. Pellentesque ac ligula rhoncus, scelerisque dui cursus, 
                        cursus lorem. Maecenas eget purus diam. Proin id metus semper, blandit metus ut, dignissim nulla. Ut id purus non elit pellentesque 
                        ultrices. Fusce lectus risus, placerat sed nunc non, consequat mattis urna. Pellentesque habitant morbi tristique senectus et 
                        netus et malesuada fames ac turpis egestas. Curabitur finibus maximus libero vitae maximus. Quisque tincidunt vulputate dolor 
                        nec egestas. Mauris viverra, ex ac aliquam posuere, mi felis eleifend magna, lobortis accumsan diam mi eget sapien. Ut fringilla 
                        sit amet ligula ac varius.
                        </Text>
                    </View>
                </ScrollView>
                <View style={styles.button}>
                    <Button color='#000000' title='ACCETTO' onPress={() => navigation.goBack()}/>
                </View>
            </View>
        )
    } else if (route.params.tipo === 'offerta') {
        return(
            <View style={mainStyle.container}>
                <ScrollView>
                    <Text style={mainStyle.title}>CONDIZIONI DELL'OFFERTA</Text>
                    <View style={styles.paragraph}>
                        <Text>
                            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu gravida eros. Morbi eget vulputate lorem. 
                            Donec vestibulum diam consectetur cursus consectetur. Nam vehicula elementum magna quis porttitor. Maecenas molestie 
                            a nisl non aliquet. Nullam faucibus purus quis ex consequat, non vulputate lorem sagittis. Nam in mauris consequat, 
                            pharetra mi vel, laoreet velit. Praesent interdum metus ut metus tempor, gravida pretium quam accumsan.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                               2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu gravida eros. Morbi eget vulputate lorem. 
                               Donec vestibulum diam consectetur cursus consectetur. Nam vehicula elementum magna quis porttitor. Maecenas molestie 
                                a nisl non aliquet. Nullam faucibus purus quis ex consequat, non vulputate lorem sagittis. Nam in mauris consequat, 
                                pharetra mi vel, laoreet velit. Praesent interdum metus ut metus tempor, gravida pretium quam accumsan.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                         <Text>
                            3. Donec ligula arcu, vestibulum non quam tempus, iaculis consequat quam. Interdum et malesuada fames ac ante ipsum 
                            primis in faucibus. Phasellus tortor arcu, porttitor nec massa at, pharetra fermentum quam. Vestibulum ante ipsum primis 
                            in faucibus orci luctus et ultrices posuere cubilia curae; In aliquam nulla vel neque facilisis malesuada. Aliquam sit 
                            amet neque quis velit venenatis accumsan vitae non tortor. In felis nisi, pulvinar et sapien nec, blandit elementum nisl. 
                            Sed interdum risus in massa scelerisque congue. Vivamus faucibus purus a leo ornare scelerisque. Nulla sollicitudin, 
                            purus id suscipit ullamcorper, quam risus pharetra eros, ac fringilla tellus nibh quis purus. Aliquam augue tortor, 
                            porttitor eu bibendum eu, ullamcorper ac risus. Vivamus vestibulum est vitae dictum porttitor. Aenean cursus neque 
                            sed neque condimentum, sed efficitur lorem cursus. Vivamus placerat suscipit ligula, id aliquet eros. Aenean blandit 
                            eu augue quis pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            4. Fusce risus mauris, sollicitudin a tincidunt eu, ultrices at dui. Pellentesque ac ligula rhoncus, scelerisque dui cursus, 
                            cursus lorem. Maecenas eget purus diam. Proin id metus semper, blandit metus ut, dignissim nulla. Ut id purus non elit pellentesque 
                            ultrices. Fusce lectus risus, placerat sed nunc non, consequat mattis urna. Pellentesque habitant morbi tristique senectus et 
                            netus et malesuada fames ac turpis egestas. Curabitur finibus maximus libero vitae maximus. Quisque tincidunt vulputate dolor 
                            nec egestas. Mauris viverra, ex ac aliquam posuere, mi felis eleifend magna, lobortis accumsan diam mi eget sapien. Ut fringilla 
                            sit amet ligula ac varius.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            5. Aliquam non ligula et dolor bibendum sodales sed a turpis. Praesent sit amet nulla nibh. Suspendisse potenti. 
                            Morbi egestas placerat ex vel elementum. Proin id porttitor velit. Morbi vel neque non lorem fringilla laoreet vel 
                            quis turpis. Pellentesque nec consequat odio. Morbi et tortor nulla. Nunc interdum est at quam accumsan facilisis. 
                            Morbi sit amet bibendum sapien. Donec euismod nisi in dolor porttitor malesuada. Aliquam quis nisi vitae augue finibus 
                            convallis sed vitae diam. Quisque ac pretium nulla. Vestibulum sed arcu felis. Donec in vulputate risus.
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            6. Nunc ut dapibus nisi, sit amet consectetur nibh. Fusce a varius sem. Proin tempus odio id nunc venenatis commodo. 
                            Vestibulum id molestie urna, nec condimentum ipsum. Nullam sed pellentesque mi, vel vehicula lectus. Vivamus eget 
                            porttitor purus. Ut vitae erat ac sapien dictum mollis.
                        </Text>
                    </View>
                </ScrollView>
                <View style={styles.button}>
                    <Button color='#000000' title='ACCETTO' onPress={() => navigation.goBack()}/>
                </View>
            </View>
        )
    }
}

export default LegalInfo;