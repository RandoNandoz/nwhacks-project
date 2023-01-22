import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


const auth = getAuth();
const user = auth.currentUser;

setPersistence(auth, browserSessionPersistence)
  .then(() => {

  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
