import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {truncateString} from '../../utils/helpers';
import {Button} from '../../atoms';

const ItemProduct = ({data}) => {
  const dataDesc = `${data?.namaproduct}`;
  return (
    <View style={styles.content}>
      <Image
        source={{
          uri: `https://sofosrobotics.id/storage/app/${data?.image}`,
        }}
        style={styles.img}
      />
      <View style={styles.wpText}>
        <Text style={styles.title}>{data?.namaproduct}</Text>
        <Text style={styles.desc}>{truncateString(dataDesc, 100)}</Text>
        <Button
          title="Detail"
          stylesButton={styles.btn}
          stylesText={{
            color: '#fff',
            fontSize: 10,
          }}
        />
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    height: 150,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 180,
  },
  desc: {
    fontSize: 10,
    color: 'black',
    maxWidth: 150,
  },
  wpText: {
    marginLeft: 12,
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
