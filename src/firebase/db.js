import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


export const updateUser = (id, gender, orientation, bio) =>
  db.ref(`users/${id}`).set({
    gender,
    orientation,
    bio
  });
