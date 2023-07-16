import Toast from 'react-native-toast-message';
import {Picker} from '@react-native-picker/picker';

export const showToast = () => {
  Toast.show({
    type: 'error',
    text1: '상품 추가 실패',
    text2: '상품 이름과 브랜드를 입력해주세요.',
  });
};

interface CustomPickerProps {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomPicker = ({brand, setBrand}: CustomPickerProps) => {
  const handleBrandChange = (value: string) => {
    setBrand(value);
  };
  return (
    <Picker
      selectedValue={brand}
      onValueChange={handleBrandChange}
      style={{borderWidth: 1, marginBottom: 10, width: 'auto'}}>
      <Picker.Item label="신발 선택" value="" />
      <Picker.Item label="Nike" value="nike" />
      <Picker.Item label="Adidas" value="adidas" />
      <Picker.Item label="Puma" value="puma" />
      <Picker.Item label="Asics" value="asics" />
    </Picker>
  );
};
