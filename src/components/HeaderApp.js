import React from 'react';
import {StyleSheet} from 'react-native';
import {Header,Left,Body,Right,Title} from 'native-base';

// HeaderApp const display a header 
//expects to receive two parameters in case of not placing any shows the default values ​​that have added
export const HeaderApp =({
    label='Title Header',
    color='#005c42' 
})=>(
    <Header 
        iosBarStyle='light-content'
        androidStatusBarColor={color} 
        style={{backgroundColor:color}}
        >
        <Left style={styles.commonStyle}/>
        <Body style={styles.bodyStyles}>
            <Title  style={styles.titleStyle}>{label}</Title>
        </Body>
        <Right style={styles.commonStyle}/>
    </Header>
)

const styles = StyleSheet.create({
    commonStyle:{
        flex:1
    },
    bodyStyles:{
        flex:3,
        alignItems:'center'
    },
    titleStyle:{
        color:'#fff'
    },
});