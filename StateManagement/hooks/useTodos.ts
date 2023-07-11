import {RootState} from './../slices/index';
import {useSelector} from 'react-redux';

export default function useTodos() {
  return useSelector((state: RootState) => state.todos);
}
