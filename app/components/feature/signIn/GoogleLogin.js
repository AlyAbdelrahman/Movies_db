// components/GoogleLogin.js
'use client'
import { auth, googleAuthProvider, signInWithPopup } from '@/firebase';

const GoogleLogin = ({ user }) => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
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
    {user ? (
      <div>
        <img
          className="mx-auto h-16 w-16 rounded-full mb-4"
          src={user.photoURL}
          alt="User Profile"
        />
        <p className="text-center text-xl font-semibold mb-2">{user.displayName}</p>
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
