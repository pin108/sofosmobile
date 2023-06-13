import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {robot3} from '../../assets';
import {getData} from '../../utils';
import {useDispatch} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const getDataUser = () => {
    getData('tokenLogin').then(res => {
      if (res === null) {
        dispatch({type: 'SET_LOGIN', value: false});
      } else {
        dispatch({type: 'SET_LOGIN', value: true});
      }
    });
  };
  useEffect(() => {
    getDataUser();
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={robot3} style={styles.img} />
      <Text style={{fontSize: RFValue(20), fontWeight: 'bold'}}>
        Welcome to My App
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9E579D',
  },
  img: {
    width: RFValue(150),
    height: RFValue(100),
    resizeMode: 'contain',
  },
});
