import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';

const HeaderPrimary = ({
  type,
  onBack,
  onInfo,
  onSearch,
  handleLogin,
  title,
  onPress,
  onPressTow,
  iconName,
  bgColor,
  stylesTitle,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.globalReducer);

  if (type === 'detail') {
    return (
      <View style={styles.container(bgColor)}>
        {onPress ? (
          <TouchableOpacity
            style={styles.btnBack}
            onPress={onPress}
            activeOpacity={0.5}>
            <Feather
              name="arrow-left"
              size={RFValue(25)}
              color={bgColor ? '#fff' : '#000'}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.btnBack} />
        )}
        <View style={styles.wpText}>
          <Text style={[styles.title(bgColor), stylesTitle]}>{title}</Text>
        </View>
        {onPressTow ? (
          <TouchableOpacity
            style={styles.btnBack}
            onPress={onPressTow}
            activeOpacity={0.5}>
            <FontAwesome5
              name={iconName}
              size={RFValue(24)}
              color={bgColor ? '#fff' : '#000'}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.btnBack} />
        )}
      </View>
    );
  }

  return (
    <View style={styles.header(bgColor)}>
      {isLogin ? (
        <View></View>
      ) : (
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      )}
      <View>
        <Text
          style={{fontSize: RFValue(16), fontWeight: 'bold', color: '#000'}}>
          {title}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default HeaderPrimary;

const styles = StyleSheet.create({
  header: bgColor => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: bgColor ? bgColor : '#fff',
  }),
  login: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#634d92',
  },
  img: {
    width: RFValue(80),
    height: RFValue(55),
    resizeMode: 'contain',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(14),
    color: '#634d92',
  },
  container: bgColor => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
    backgroundColor: bgColor ? bgColor : '#fff',
  }),
  btnBack: {
    width: RFValue(25),
    height: RFValue(25),
  },
  title: bgColor => ({
    fontSize: RFValue(16),
    fontFamily: 'Poppins-SemiBold',
    color: bgColor ? '#fff' : '#000',
    textTransform: 'capitalize',
  }),
  wpText: {
    flex: 1,
    alignItems: 'center',
  },
});
