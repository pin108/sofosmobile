import {Platform} from 'react-native';
// import axios from 'axios';
export const truncateString = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string;
};

export const truncateStringV2 = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '' : string;
};


export const TabVersion = 499;