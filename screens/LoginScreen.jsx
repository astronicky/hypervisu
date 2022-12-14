import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Text, View, StyleSheet, Pressable, ScrollView, SafeAreaView, TextInput, ToastAndroid } from "react-native";
import axios from 'axios';
import Logo from "../components/Common/Logo";
import { CONNECT, HOME, PLACEHOLDER_USERNAME, PLACEFOLDER_PASSWORD, USER_LABEL, PASSWORD_LABEL, SINGIN_DESCIPTION, SINGIN_LABEL, PASSWORD_FORGOTTEN, LOGIN, FORGOT_PASSWORD, LOGINED_USER } from "../Constant";
import config from "../config/config";
import requestAPI from "../utils/requestAPI";
import { userLogin } from "../apis/users";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {

    // const changeScreenOrientation = async () => {
    //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    // }; 

    // useEffect(() => {
        
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         changeScreenOrientation();
    //     });

    //     return unsubscribe;
    // }, [navigation]);
    const [userName, setUserName] = useState('admin');
    const [userPwd, setUserPwd] = useState('admin');

    const loginClick = async () => {
        if(!userName && !userPwd) {
            const msg = "Input username and password";
            ToastAndroid.show(msg, ToastAndroid.SHORT);
            return;
        } else if(!userName) {
            const msg = "Input username";
            ToastAndroid.show(msg, ToastAndroid.SHORT);
            return;
        } else if(!userPwd) {
            const msg = "Input password";
            ToastAndroid.show(msg, ToastAndroid.SHORT);
            return;
        }

        try {
            const data = await userLogin(userName, userPwd);
            await AsyncStorage.setItem(LOGINED_USER, JSON.stringify(data.user));
            
            ToastAndroid.show("Login success", ToastAndroid.SHORT);
            navigation.navigate(HOME);
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <SafeAreaView style={styles.containerScroll}>
            <ScrollView style={styles.scrollView}>
                <Layout>
                    <View style={styles.container}>
                        <Logo />
                        <Text style={styles.signinLabel}>{SINGIN_LABEL}</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.signinDescription}>{SINGIN_DESCIPTION}</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{USER_LABEL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEHOLDER_USERNAME} placeholderTextColor={styles.input.placeholderTextColor} onChangeText={value => setUserName(value)} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{PASSWORD_LABEL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEFOLDER_PASSWORD} placeholderTextColor={styles.input.placeholderTextColor} secureTextEntry={true} onChangeText={value => setUserPwd(value)} />
                            </View>
                        </View>
                        <Pressable onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
                            <Text style={styles.passwordForgotten}>{PASSWORD_FORGOTTEN}</Text>
                        </Pressable>
                        <Pressable style={styles.loginButton} onPress={() => {loginClick()}}>
                            <Text style={styles.buttonText}>{LOGIN}</Text>
                        </Pressable>
                    </View>
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        height: '100%',
        paddingVertical: 10,
        backgroundColor: 'black'
    },
    scrollView: {
        backgroundColor: 'black'
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    signinLabel: {
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 41,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        marginTop: 16
    },
    signinDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 8,
        paddingHorizontal: 75,
        paddingBottom: 38,
        color: '#ffffff'
    },
    passwordForgotten: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 30
    },
    inputContainer: {
        padding: 16,
        backgroundColor: '#2F2F31',
        placeholderTextColor: '#8E8E93',
        borderColor: '#8E8E93',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputLabelStyle: {
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        marginRight: 8,
        flex: 0.5
    },
    input: {
        backgroundColor: '#2F2F31',
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        placeholderTextColor: '#8E8E93',
        flex: 1
    },
    loginButton: {
        width: '100%',
        marginTop: 50,
        borderRadius: 12,
        backgroundColor: '#F1580C'
    },
    buttonText: {
        paddingVertical: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF'
    }
});