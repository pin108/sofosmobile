import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = ({stylesLine}) => {
  return <View style={[styles.line, stylesLine]} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#d3d3d3',
  },
});
