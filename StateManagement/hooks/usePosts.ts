import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../slices';
import {fetchPosts} from '../slices/posts';

export default function usePosts({enabled = true}: {enabled: boolean}) {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();
  const fetchDate = useCallback(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchDate();
  }, [enabled, fetchDate]);

  return {
    ...posts,
    refetch: fetchDate,
  };
}
