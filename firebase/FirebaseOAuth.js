import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from './initFirebase'

initFirebase()

export const googleSignin = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged(onChange)
}

export const googleSignout = () => {
  firebase.auth().signOut()

  .then(function() {
     console.log('Signout Succesfull')
  }, function(error) {
     console.log('Signout Failed')
     console.log(error.message);
  });
}


/*
export const githubOAuth = () => {
  return new firebase.auth.GithubAuthProvider();
};

export const twitterOAuth = () => {
  return new firebase.auth.TwitterAuthProvider();
};

export const facebookOAuth = () => {
  return new firebase.auth.FacebookAuthProvider();
};
*/