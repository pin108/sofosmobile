import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getData, storeData} from '../../utils/storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  HeaderPrimary,
  ItemEvent,
  ItemProduct,
  SkeletonDefault,
} from '../../components';
import {Gap, Line, TitleSection} from '../../atoms';
import {robot3} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getDataDashboard} from '../../redux/action';
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.globalReducer);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  console.log(load);
  console.log('TEST DATA 1', data?.[0]?.robot);
  let jsonData = JSON.stringify(data);
  console.log('TEST DATA', jsonData[0]);

  useEffect(() => {
    dispatch(getDataDashboard(setData, setLoad));
  }, []);
  return (
    <SafeAreaView style={styles.page}>
      <HeaderPrimary
        title="Home"
        handleLogin={() => navigation.navigate('LoginScreen')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.wpContent}>
            <Image source={robot3} style={styles.img} />
            <View style={styles.wpText}>
              <Text style={styles.txtContentTitle}>
                ROBOTICS AND AUTOMATION FAKULTAS TEKNIK UDINUS
              </Text>
              <Text style={styles.txtContentDesc}>
                We are team of talented designers making robot with profesional
              </Text>
            </View>
          </View>
          <TitleSection title="Our Project" titleLink={'Info'} />
          <Gap height={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {load ? (
              <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
              </View>
            ) : (
              data?.[0]?.robot?.map((item, index) => {
                return <ItemProduct key={index} data={item} />;
              })
            )}
            <Gap width={15} />
          </ScrollView>
          <TitleSection title="Pelatihan" titleLink={'Info'} />
          <Gap height={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {load ? (
              <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
              </View>
            ) : (
              data?.[0]?.robot?.map((item, index) => {
                return <ItemProduct key={index} data={item} />;
              })
            )}
            <Gap width={15} />
          </ScrollView>
          <TitleSection title="Event" titleLink={'Info'} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {load ? (
              <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
                <SkeletonDefault
                  stylesSkeleton={{width: 250, height: 100, marginRight: 15}}
                />
              </View>
            ) : (
              data?.[0]?.agendas?.map((item, index) => {
                return (
                  <ItemEvent key={index} data={item} isLogin={isLogin} />
                )
              })
            )}
            <Gap width={15} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 5,
  },
  txtHome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  // banner content
  wpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#634d92',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingBottom: 10,
  },
  img: {
    width: 150,
    height: 150,
  },
  wpText: {
    marginTop: 10,
  },
  txtContentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: 180,
  },
  txtContentDesc: {
    fontSize: 10,
    color: '#fff',
    maxWidth: 180,
  },
  // end banner content
});
