import {useDispatch} from 'react-redux';
import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {addItem, removeItem, updateItem} from '../slices/slice';

export default function useShopActions() {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({addItem, removeItem, updateItem}, dispatch),
    [dispatch],
  );
}
