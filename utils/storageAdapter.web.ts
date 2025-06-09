import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

export const getStorageAdapter = () => {
  return typeof window !== 'undefined' && localStorage;
};
