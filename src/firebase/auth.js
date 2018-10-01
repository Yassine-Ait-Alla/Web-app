import { auth } from './firebase';

//firebase signup
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//firebase signin
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => {
  auth.signOut();
}

export const doPasswordReset = (email) =>
  auth.currenUser.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
  auth.currenUser.updatePassword(password)
