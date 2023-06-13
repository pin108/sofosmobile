import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {truncateString} from '../../utils/helpers';
import {Button} from '../../atoms';

const ItemEvent = () => {
  return (
    <ImageBackground
      source={{
        uri: `http://www.sofosrobotics.id/assets/image/robot-master/MRC.jpg`,
      }}
      style={styles.img}
      imageStyle={{borderRadius: 10, resizeMode: 'cover'}}>
      <View style={styles.wpText}>
        <Text style={styles.title}>
          Madrasah Robotic Competition 2022 (MRC)
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ItemEvent;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 15,
  },
  img: {
    width: 250,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginTop: 10,
    marginLeft: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  desc: {
    fontSize: 10,
    color: 'black',
    maxWidth: 150,
  },
  wpText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(128, 0, 128, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  btn: {
    backgroundColor: '#634d92',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
    width: 80,
  },
});
