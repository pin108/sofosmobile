import Toast from 'react-native-toast-message';
export const showMessage = (message, type) => {
  Toast.show({
    type: type === 'success' ? 'success' : 'error',
    text1: message,
    text2: type === 'success' ? 'Success 👏🏻' : 'Terjadi Kesalahan 🙁',
  });
};
