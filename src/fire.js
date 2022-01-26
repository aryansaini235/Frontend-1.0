import firebase from 'firebase';

 var firebaseConfig = {
   apiKey: "AIzaSyAqejieqUDySHqXvqFQETpMk1J7o5I5cCY",
   authDomain: "finvoiced-803af.firebaseapp.com",
   projectId: "finvoiced-803af",
   storageBucket: "finvoiced-803af.appspot.com",
   messagingSenderId: "371973236918",
   appId: "1:371973236918:web:c8e02cb0ce6e5c03955e17"
 };

export const fireb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, name) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = name;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
