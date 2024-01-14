import { auth, firestore, googleAuthProvider, signInWithPopup, } from '@/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const GoogleLogin = () => {
    const {userData} = useSelector(state => state.user);
    console.log('.........',userData)
  const signInWithGoogle = async () => {
    try {
        // Sign in with Google
        const result = await signInWithPopup(auth, googleAuthProvider);
      
        // Access the user data
        const userData = result.user;
      
        // Check if the user document exists
        const userDocRef = doc(firestore, 'users', userData.uid);
        const userDocSnapshot = await getDoc(userDocRef);
      
        // If the document doesn't exist, create it
        if (!userDocSnapshot.exists()) {
          await setDoc(userDocRef, {
            watchlist: [],
            // other user data if needed
          });
        }
      } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
    {userData ? (
      <div>
        <img
          className="mx-auto h-16 w-16 rounded-full mb-4"
          src={userData.photoURL}
          alt="User Profile"
        />
        <p className="text-center text-xl font-semibold mb-2">{userData.displayName}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    ) : (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    )}
  </div>
  );
};

export default GoogleLogin;
