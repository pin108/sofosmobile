import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderPrimary} from '../../components';
import {logoLogin} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button, Gap, Line, TextInput} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {postLogin} from '../../redux/action';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const handleLogin = () => {
    const orderedData = JSON.stringify(
      form,
      ['username', 'password'],
      2,
    );
    dispatch(postLogin(orderedData, navigation));
  };
  return (
    <SafeAreaView style={styles.page}>
      <HeaderPrimary type={'detail'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wpCard}>
          <Image source={logoLogin} style={styles.logo} />
          <View style={styles.wpText}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              Please login to continue using our app
            </Text>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.wpInput}>
          <TextInput
            placeholder="Username"
            lable={'Username'}
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={10} />
          <TextInput
            placeholder="Password"
            lable={'Password'}
            value={form.password}
            secureTextEntry
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={10} />
          <Text style={styles.txt}>Forgot Password ?</Text>
          <Gap height={20} />
          <Button
            title="Login"
            stylesButton={styles.btn}
            onPress={handleLogin}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 15,
          }}>
          <View style={styles.wpLine}>
            <Line stylesLine={{width: '40%'}} />
            <Text style={styles.txt}>Or</Text>
            <Line stylesLine={{width: '40%'}} />
          </View>
          <Gap height={20} />
          <Button
            title="Register"
            stylesButton={styles.btnV2}
            stylesText={styles.txtV2}
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
        <Gap height={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
