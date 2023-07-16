import {useSelector} from 'react-redux';
import {RootState} from '../slices';
export default function useShop() {
  return useSelector((state: RootState) => state.shoppingList);
}
