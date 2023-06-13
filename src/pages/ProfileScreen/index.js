import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {HeaderPrimary, ItemEvent} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {robot3} from '../../assets';
import {Button, Gap, TitleSection} from '../../atoms';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.page}>
      <HeaderPrimary
        title="Profile"
        handleLogin={() => navigation.navigate('LoginScreen')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wpCard}>
          <Image
            source={{
              uri: `http://www.sofosrobotics.id/assets/image/robot-master/MRC.jpg`,
            }}
            style={styles.logo}
          />
          <View
            style={{
              marginLeft: 5,
            }}>
            <Text style={styles.title}></Text>
            <Button
              title="Edit Profile"
              stylesButton={styles.btn}
              stylesText={{
                color: '#684E93',
                fontSize: 10,
              }}
            />
          </View>
        </View>
        <Gap height={10} />
        <TitleSection title="Activity" />
        <View style={styles.wpItem}>
          <Text style={styles.txtItem}>History Order</Text>
          <AntDesign name="arrowright" size={16} color="black" />
        </View>
        <View style={styles.wpItem}>
          <Text style={styles.txtItem}>History Read</Text>
          <AntDesign name="arrowright" size={16} color="black" />
        </View>
        <Gap height={10} />
        <TitleSection title="Event" titleLink={'Info'} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ItemEvent />
          <ItemEvent />
          <Gap width={15} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wpCard: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#684E93',
    borderRadius: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#EDEDED',
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  btn: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 5,
    width: RFValue(80),
  },
  wpItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    marginHorizontal: 15,
    marginBottom: 5,
  },
  txtItem: {
    fontSize: 12,
    color: '#595959',
  },
});
