import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {HeaderPrimary} from '../../components';
import {logoLogin} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, Gap, Line, TextInput} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {postRegister} from '../../redux/action';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    nama: '',
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const onHandleRegister = () => {
    const orderedData = JSON.stringify(
      form,
      ['nama', 'username', 'email', 'password', 'phone'],
      2,
    );
    console.log(orderedData);

    dispatch(postRegister(orderedData, navigation));
  };

  return (
    <SafeAreaView style={styles.page}>
      <HeaderPrimary type={'detail'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wpCard}>
          <Image source={logoLogin} style={styles.logo} />
          <View style={styles.wpText}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              Please register to continue using our app
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.wpInput}>
          <TextInput
            placeholder="Full Name"
            lable={'Full Name'}
            value={form.nama}
            onChangeText={value => setForm('nama', value)}
          />
          <Gap height={10} />
          <TextInput
            placeholder="Username"
            lable={'Username'}
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={10} />
          <TextInput
            placeholder="Email"
            lable={'Email'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={10} />
          <TextInput
            placeholder="Phone Number"
            lable={'Phone Number'}
            value={form.phone}
            onChangeText={value => setForm('phone', value)}
          />
          <Gap height={10} />
          <TextInput
            placeholder="Password"
            lable={'Password'}
            value={form.password}
            secureTextEntry={true}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={20} />
          <Button
            title="Register"
            stylesButton={styles.btn}
            onPress={onHandleRegister}
          />
        </View>
        <Gap height={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wpCard: {
    flexDirection: 'row',
  },
  logo: {
    width: RFValue(200), //
    height: RFValue(200), // RFValue(100
    resizeMode: 'contain',
  },
  wpText: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#595959',
    maxWidth: 150,
  },
  wpInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  txt: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#595959',
    textAlign: 'right',
  },
  btn: {
    backgroundColor: '#9571F6',
    borderRadius: 5,
    paddingVertical: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnV2: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9571F6',
  },
  txtV2: {
    color: '#9571F6',
  },
  wpLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
