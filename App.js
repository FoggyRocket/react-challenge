/**
 * Sample React Native App
 * https://github.com/foggyrocket/react-challenge
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {  
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { HeaderApp } from './src/components/HeaderApp';
import { ElementList } from './src/components/ElementList';
import { useDispatch, useSelector } from "react-redux";
import { fetchBanks, getBanksSuccess, loadingBanks } from './src/redux/BanksDuck';
import { Loader } from './src/components/Loader';
import AsyncStorage from '@react-native-community/async-storage';

function App () {
 
  const dispatch = useDispatch();
  // dogList will store the list of bankObject 
  const dogList = useSelector((state) => state.banks.items);
  const status = useSelector((state) => state.banks.status);
  // This function is only to show the onPress event, recive  params thats name of bank
  const _onWait = (bankName)=>{
    Alert.alert(
      'Hey Listen!!',
      `Do you want open ${bankName} ?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        { text: 'Go',
          onPress: () => {} 
        }
      ],
      { cancelable: true }
    );
  }

  //
  useEffect(()=>{
  //  This function is to check if there is data from the Bank Objects List, in case it is empty,
  //   make a request to the endpoint
    async function getData(){
      try {
        dispatch(loadingBanks())
        const value = await AsyncStorage.getItem('@dogList')
        if(value !== null) {
    
         dispatch(getBanksSuccess(JSON.parse(value)))
        }else{
          dispatch(fetchBanks())
        }
      } catch(e) {
        // error reading value
        console.error(e)
      }
    }
    getData()
  },[dispatch])


  return (
    <>
    {/* section header receive params like label and color (default)*/}
        <HeaderApp 
          label='React Challenge'
          />
    {/* section content show list */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
      {/* content from list of banks */}
          {dogList.map((item,index)=>
            <ElementList 
              key={index}
              {...item}
              onPress={()=>_onWait(item.bankName)} 
              />
          )}
        {/* The loader will be displayed when we request to get the list of banks, 
            it is linked to the state of our initalState in BanksDucks, 
            to give you feedback of what is happening at that moment */}
          <Loader 
            visible={status}
          />

        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
