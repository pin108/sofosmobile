import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import {Image} from 'react-native';
import Gap from '../Gap';

const TitleSection = ({
  onPress,
  title,
  titleLink,
  styleText,
  styleText2,
  styesSection,
  type,
  onSearch,
  TintColor,
  onCreateReels,
  icon
}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.container, styesSection]}>
      <Text style={[styles.title, styleText]}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Gap width={10} />
        <Text style={[styles.link, styleText2]}>{titleLink}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(10),
    alignItems: 'center',
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: '#4F4F4F',
  },
  link: {
    fontSize: RFValue(10),
    fontFamily: 'Poppins-Medium',
    color: '#7F5298',
    marginTop: RFValue(2),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionHastag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperHastag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHastag: {
    height: 40,
    width: 40,
    borderRadius: 80,
    backgroundColor: '#251B37',
    padding: 20,
    marginRight: 10,
  },
  hastag: {
    fontSize: RFValue(20),
    color: '#fff',
    position: 'absolute',
    top: 0,
    left: 12,
    top: 5,
  },

  titleHastag: {
    fontSize: RFValue(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },

  view: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: '#d4d4d4',
    marginTop: -4,
  },

  arrowRels: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seAll: {
    fontSize: RFValue(14),
    marginRight: 2,
  },
  titleGlowUp: {
    fontSize: RFValue(16),
    fontFamily: 'Poppins-SemiBold',
    color: '#242424',
  },
  txtKetentuan: {
    color: '#7B7B7B',
    fontSize: RFValue(12),
    fontFamily: 'Poppins-Medium',
  },
});
