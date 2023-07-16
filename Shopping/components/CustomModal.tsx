import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import {Item} from '../slices/slice';
import {CustomPicker, showToast} from './Component';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {useSelector} from 'react-redux';
import {RootState} from '../slices';
import useShopActions from '../hooks/useShopAction';

interface UpdateModalProps {
  visible: boolean;
  onClose: () => void;
  passedId: number;
}

function UpdateModal({visible, onClose, passedId}: UpdateModalProps) {
  const items = useSelector((state: RootState) => state.shoppingList.items);

  const {updateItem} = useShopActions();
  // useEffect(() => {
  //   const items = useSelector((state: RootState) => state.shoppingList.items);
  //   // ID에 해당하는 요소만 필터링하여 새로운 배열 생성
  //   const filteredItems = items.filter(item => item.id === passedId);
  //   console.log(filteredItems);
  // }, []);

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    if (name && brand && date) {
      updateItem({
        id: passedId,
        name,
        brand,
        createdAt: date.toISOString(),
      });
      onClose();
    } else {
      showToast();
    }
  };

  const onChange = (event, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowModal(false);
    setDate(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{
          marginBottom: 16,
          padding: 8,
          borderWidth: 1,
          borderColor: 'gray',
        }}
      />
      <CustomPicker brand={brand} setBrand={setBrand} />
      <Text onPress={() => setShowModal(true)}>{date.toISOString()}</Text>
      <Button title="Change" onPress={handleAdd} />
      <Button title="Cancel" onPress={onClose} />
      {showModal && <RNDateTimePicker value={date} onChange={onChange} />}
    </Modal>
  );
}

// Usage:
// <UpdateModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={handleAddItem} />

export default UpdateModal;
