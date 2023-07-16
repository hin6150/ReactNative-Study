import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Item} from '../slices/slice';
import {RootState} from '../slices';
import useShopActions from '../hooks/useShopAction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomModal from '../components/CustomModal';
import {CustomPicker, showToast} from '../components/Component';

const AdminScreen = () => {
  const {addItem, removeItem} = useShopActions();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [modalState, setModalState] = useState(false);
  const [passedId, setPassedId] = useState(0);

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (brand == '' || name == '') {
      showToast();
      return;
    }
    addItem({id: 0, name, brand, createdAt: new Date().toISOString()});
  };

  const handleUpdate = (id: number) => {
    setPassedId(id);
    setModalState(true);
  };

  const handleRemove = (id: number) => {
    removeItem(id);
  };

  const items = useSelector((state: RootState) => state.shoppingList.items);

  // renderItem 함수 정의
  const renderItem = ({item}: {item: Item}) => (
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
      <View style={{flex: 1}}>
        <Text>{item.name}</Text>
        <Text>{item.brand}</Text>
        <Text>{item.createdAt.toString()}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleUpdate(item.id)}
        style={{marginRight: 8}}>
        <Icon name="edit" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRemove(item.id)}>
        <Icon name="delete" size={20} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <TextInput
        placeholder="상품 이름"
        value={name}
        onChangeText={handleNameChange}
        style={{borderWidth: 1, padding: 10, marginBottom: 10}}
      />
      <CustomPicker brand={brand} setBrand={setBrand} />

      <Button title="추가" onPress={handleSubmit} />

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <CustomModal
        visible={modalState}
        onClose={() => setModalState(false)}
        passedId={passedId}
      />
    </View>
  );
};

export default AdminScreen;
