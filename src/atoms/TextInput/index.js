import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput as TextInputRN,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize';
const screenWidth = Dimensions.get('window').width;
const TextInput = ({
  type,
  placeholder,
  lable,
  stylesTextInput,
  stylesLabel,
  ...restProps
}) => {

  return (
    <View>
      {lable && <Text style={[styles.lable, stylesLabel]}>{lable}</Text>}
      <TextInputRN
        style={[styles.input, stylesTextInput]}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - RFValue(32),
  },
  wpTextInput: {
    width: screenWidth - RFValue(32) - RFValue(55),
  },
  input: {
    minHeight: hp('6%'),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(10),
    borderRadius: RFValue(8),
    borderWidth: RFValue(1),
    borderColor: '#E0E0E0',
    fontSize: RFValue(11),
    fontFamily: 'Poppins-Medium',
  },
  lable: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: '#4F4F4F',
  },
  wpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - RFValue(32) - RFValue(10),
    height: RFValue(50),
    marginTop: RFValue(10),
  },
});
