import React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import {ListItem,Left,Right,Body,Thumbnail,Text} from 'native-base';

// const display a elementsList 
//expects to receive 5 parameters in case of not placing any shows the default values ​​that have added
//bankName, description,age,url type text  from object of list Banks
//onPress function 
export const ElementList =({
        bankName,
        description,
        age,
        url,
        onPress=()=>{}})=>(
    <ListItem thumbnail noIndent  onPress={onPress}>
        <Left >
            <Thumbnail square source={{ uri: url }} />      
        </Left>
        <Body>
            <View style={styles.contentStyle}>
                <Text 
                    style={styles.commonStyle}
                    >
                    {bankName}
                </Text>
                <Text 
                    style={styles.commonStyle} 
                    note 
                    numberOfLines={2}
                    >
                    {description}
                </Text> 
                <Text 
                    style={styles.commonStyle}
                    note
                    >
                    Age: {age}
                </Text>
            </View>
        </Body>
        <Right>
            <Image  source={require('../assets/images/common_icons/right_arrow.png')} style={styles.iconStyle}/>
        </Right>
    </ListItem>
);

const styles = StyleSheet.create({
    contentStyle:{
        flexDirection:'column',
        alignItems:'flex-start'
    },
    commonStyle:{
        width:'100%', 
    },
    iconStyle:{
        resizeMode:'contain',
        width:25,
        height:25
    }
});