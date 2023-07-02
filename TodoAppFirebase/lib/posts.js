import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('todos');

export function createPost({text, done}) {
  return postsCollection.add({
    text,
    done,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}

export async function getPosts() {
  const snapshot = await postsCollection.get();
  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}

export async function getOnePost(id) {
  return postsCollection.doc(id);
}

export function removePost(id) {
  return postsCollection.doc(id).delete();
}

export function updatePost({id, done}) {
  return postsCollection.doc(id).update({
    done,
  });
}
