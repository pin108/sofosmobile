import axios from 'axios';
import {API_HOST} from '../../config/API';
import {getData, showMessage, storeData} from '../../utils';

export const postLogin = (form, navigation) => dispatch => {
  console.log('form', form);
  try {
    const res = axios.post(`${API_HOST.baseUrlAPI}login`, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.then(res => {
      storeData('tokenLogin', res?.data?.token);
      showMessage(res?.data?.message, 'success');
      dispatch({type: 'SET_LOADING', value: false});
      dispatch({type: 'SET_LOGIN', value: true});
      navigation.navigate('Home');
    });
  } catch (e) {
    console.log('error', e);
  }
};

export const postRegister = (form, navigation) => async dispatch => {
  console.log('form', form);
  try {
    const res = await axios.post(`${API_HOST.baseUrlAPI}register`, form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.then(res => {
      showMessage(res?.data?.message, 'success');
      dispatch({type: 'SET_LOADING', value: false});
      navigation.navigate('LoginScreen');
    });
  } catch (e) {
    console.log('error', e?.response?.data?.message);
    showMessage(e?.response?.data?.message, 'error');
  }
};

export const getDataDashboard = (setData, setLoad) => async dispatch => {
  try {
    setLoad(true);
    const getToken = await getData('tokenLogin');
    console.log('getToken', getToken);
    const res = await axios.get(`${API_HOST.baseUrlAPI}dashboard`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    if (res) {
      setData(res?.data);
      setLoad(false);
    }
  } catch (e) {
    console.log('get erorr', e?.response?.data?.message);
    setLoad(false);
  }
};
