import { _axios } from "../services/api";
import AsyncStorage from '@react-native-community/async-storage';

// Actions
const LOADING = "challengeReact/banks/LOADING";
const GET_BANKS_SUCCESS = "challengeReact/banks/GET_BANKS_SUCCESS";
const GET_BANKS_ERROR = "challengeReact/banks/GET_BANKS_ERROR";

const initialState = {
  items: [],
  status: "",
  error: undefined,
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: "pending" };

    case GET_BANKS_SUCCESS:
      return { ...state, status: "success", items: [ ...action.payload ] };

    case GET_BANKS_ERROR:
      return { ...state, status: "error", error: action.error };

    default:
      return state;
  }
}


// Action Creators
export const loadingBanks = () => ({
  type: LOADING,
});

export const getBanksSuccess = (payload) => ({
  type: GET_BANKS_SUCCESS,
  payload,
});

export const getGroupsError = (error) => ({
  type: GET_BANKS_ERROR,
  error,
});

// side effects 
export const fetchBanks = () => async(dispatch) =>{
    dispatch(loadingBanks());

    try {
        // items is the request of the list of banks to be true or bring data 
        // will be stored in our localStorage
        let items =  await _axios.get()
            .then((res) => {
                items = res.data
                dispatch(getBanksSuccess(items));
                return res.data
            })
            .catch((err) => {
                dispatch(getGroupsError(err));
                return false
            });
            if(items ) await AsyncStorage.setItem('@dogList', JSON.stringify(items))
          
      } catch (e) {
        // saving error
      }
   
}

