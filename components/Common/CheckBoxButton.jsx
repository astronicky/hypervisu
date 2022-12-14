import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from './ActionButton';
import { useOrientation } from '../../hooks/useOrientation';
import { ACTION_ARROW_UP, ACTION_ARROW_DOWN, ACTION_MINUS, ACTION_PLUS } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');

const CheckBoxButton = ({ flagButton, title, bottomTitle, imgMainUrl, style, imgCenterUrl, textBottom, showModal }) => {
    
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <View {...{ style }}>
            <View style={portrait.container}>
                <TouchableOpacity>
                    <Pressable style={portrait.baseButton} onPress={() => (showModal) && showModal() }>
                        <View style={{...portrait.baseButton, flex: 7 }}>
                            <View style={portrait.mainImgage}>
                                <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                                <Image source={imgMainUrl} resizeMode="contain" style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
                            </View>
                            <View>
                            <Text style={orientationStyle.roomText}>{title}</Text>
                            {bottomTitle !== undefined && <Text style={orientationStyle.valueText}>{bottomTitle}</Text>}
                            </View>
                        </View>
                        <View style={portrait.btnGroup}>
                            {flagButton !== undefined && (flagButton === true?(<ActionButton name={ACTION_PLUS} style={portrait[ACTION_PLUS]} onClick={(value) => setClimateTemp(value)} />) :
                                        (<ActionButton name={ACTION_ARROW_UP} style={portrait[ACTION_ARROW_UP]} onClick={() => {}} />))}
                            {imgCenterUrl !== undefined && <Image source={imgCenterUrl}></Image>}
                            {textBottom !== undefined && <Text style={{ fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.5 }}>{climateTemp}</Text>}
                            {flagButton !== undefined && (flagButton === true?(<ActionButton name={ACTION_MINUS} style={portrait[ACTION_MINUS]} onClick={(value) => setClimateTemp(value)} />) :
                                        (<ActionButton name={ACTION_ARROW_DOWN} style={portrait[ACTION_ARROW_DOWN]} onClick={() => {}} />))}
                        </View>  
                    </Pressable> 
                </TouchableOpacity>           
            </View>
        </View> 
    )
};

const portrait = StyleSheet.create({
    [ACTION_MINUS]: {
        width: 20,
        height: 20
    },
    [ACTION_PLUS]: {
        width: 20,
        height: 20
    },
    [ACTION_ARROW_DOWN]: {
      width: 40,
      height: 40
    },
    [ACTION_ARROW_UP]: {
        width: 40,
        height: 40
    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 9,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        backgroundColor: '#2F2F31',
        marginBottom: 15
    },
    baseButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    roomText: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    },
    valueText: {
        marginLeft: 25,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: -0.24,
        opacity: 0.5
    },
    mainImgage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGroup: {
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

const landscape = StyleSheet.create({
    roomText: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    },
    valueText: {
        marginLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 20,
        letterSpacing: -0.24,
        opacity: 0.5
    },
});

export default CheckBoxButton;