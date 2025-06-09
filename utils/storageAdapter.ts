import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();

export const getStorageAdapter = () => {
  return {
    setItem: (key: string, data: any) => storage.set(key, data),
    getItem: (key: string) => storage.getString(key) || '',
    removeItem: (key: string) => storage.delete(key),
  };
};
