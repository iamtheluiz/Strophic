import { PermissionsAndroid, Alert } from 'react-native';

export const getStoragePermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    {
      title: 'Strophic Storage Permission',
      message: 'Permita que o strophic tenha acesso aos seus arquivos',
      buttonPositive: 'Permitir',
    },
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return granted;
  } else {
    Alert.alert(
      'Permission required',
      'Permita que o strophic tenha acesso aos seus arquivos',
      [{ text: 'OK', onPress: async () => await getStoragePermission() }],
      { cancelable: false },
    );
  }
};

export const checkStoragePermissions = async () => {
  let granted = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  return granted;
};
