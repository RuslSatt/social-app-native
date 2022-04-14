import React from 'react';
import {TouchableOpacity, StyleSheet, ImageBackground, Text, View, Image, Button} from "react-native";

import image from '../../assets/images/dark-background.png'
import elementOne from '../../assets/images/element-1.png'
import elementTwo from '../../assets/images/element-2.png'
import elementThree from '../../assets/images/element-3.png'
import elementFour from '../../assets/images/element-4.png'

export const StartPage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' source={image} style={styles.image}>
                <Text style={styles.title}>
                    Social App
                </Text>
                <View style={styles.images}>
                    <Image style={{
                        maxWidth: "100%",
                        position: "absolute",
                        top: 10,
                        left: -93,
                    }} source={elementOne}/>
                    <Image style={{
                        maxWidth: "100%",
                        position: "absolute",
                        top: 116,
                        left: 10,
                    }} source={elementTwo}/>
                    <Image style={{
                        maxWidth: "100%",
                        position: "absolute",
                        top: 200,
                        left: -93,
                    }} source={elementThree}/>
                    <Image style={{
                        maxWidth: "100%",
                        position: "absolute",
                        top: 116,
                        left: -173,
                    }} source={elementFour}/>
                </View>
                <Text style={styles.subtitle}>
                    SHARE - INSPIRE - CONNECT
                </Text>
                <TouchableOpacity>
                    <Text style={styles.button}>
                        GET STARTED
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 26,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    images: {
        maxWidth: 345,
        position: "relative",
        flex: 0.5,
    },
    subtitle: {
        paddingTop: 300,
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 43,
    },
    button: {
        backgroundColor: 'rgba(208, 208, 208, 0.3)',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 24,
        paddingRight: 24,
        borderRadius: 30,
        fontSize: 16,
        color: '#FFFFFF',
    }
})


