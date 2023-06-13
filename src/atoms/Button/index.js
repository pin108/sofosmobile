import React from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Button = ({
  type,
  title,
  onPress,
  icons,
  kind,
  likes,
  stylesButton,
  stylesText,
  isLike,
  loadingLike,
  disabled
}) => {
  if (kind === 'btn-icon') {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.containerBtnIcon}>
          {loadingLike ? (
            <ActivityIndicator size={'small'} color={'#fff'} />
          ) : isLike ? (
            <AntDesign name="heart" size={24} color="#fff" />
          ) : (
            <AntDesign name="hearto" size={24} color="#fff" />
          )}
          {loadingLike ? null : <Text style={styles.text}>{likes}</Text> }
        </View>
      </TouchableOpacity>
    );
  }

  const Icons = () => {
    // if (icons) {
    //   return <IcSearch />;
    // }

    return <Text style={[styles.lable(type), stylesText]}>{title}</Text>;
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} disabled={disabled}>
      <View style={[styles.container(type), stylesButton]}>{Icons()}</View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#fff' : '#009688',
    borderRadius: 13,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: type === 'secondary' ? '#009688' : '#fff',
  }),
  lable: type => ({
    fontSize: RFValue(14),
    textAlign: 'center',
    color: type === 'secondary' ? '#009688' : '#fff',
    fontFamily: 'Poppins-SemiBold',
  }),

  containerBtnIcon: {
    backgroundColor: '#ff2d55',
    borderRadius: 13,
    paddingVertical: 9,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(22),
    marginLeft: 8,
  },
});
