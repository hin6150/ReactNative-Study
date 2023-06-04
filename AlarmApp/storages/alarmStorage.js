import AsyncStorage from '@react-native-community/async-storage';

const key = 'alarms';

const alarmStorage = {
  async get() {
    try {
      const rawItems = await AsyncStorage.getItem(key);

      if (!rawItems) {
        // 저장된 데이터가 없으면 사용하지 않음
        throw new Error('No saved' + key);
      }

      const savedItems = JSON.parse(rawItems);
      return savedItems;
    } catch (e) {
      throw new Error('Failed to load' + key);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save' + key);
    }
  },
};

export default alarmStorage;
