import React from 'react'
import {View,Modal,StyleSheet} from 'react-native'
import {Spinner,Text} from 'native-base';

// const display a loader 
//expects to receive 4 parameters in case of not placing any shows the default values ​​that have added
//visable type text  like  "pending" || "success"|| "error"
//close function
//animation type text  like  "fade" || "slide" || "none"
//color type text like "rgb" || "rgba" || "full name" || "hex"
export const Loader = ({
    visible,
    close=()=>{},
    animation='fade', 
    color='#005c42' }) =>(
    <Modal
        animationType={animation}
        onRequestClose={close}
        supportedOrientations={['landscape', 'portrait']}
        visible={visible === 'pending' ? true : false}
    >
        <View 
            style={styles.container}
            >
            <Spinner 
                color={color} 
                />
            <Text 
                style={[styles.textStyle,{color}]}
                >
                Loading ...
            </Text>
        </View> 
    </Modal>

)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'absolute',
      justifyContent:'center',
      alignItems:'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:20
    }
})