import {RootState} from './../slices/index';
import {useSelector} from 'react-redux';

export default function useUser() {
  return useSelector((state: RootState) => state.auth.user);
}
