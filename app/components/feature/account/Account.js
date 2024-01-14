'use client'
import { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import GoogleLogin from '../signIn/GoogleLogin';

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <GoogleLogin user={user} />
    </div>
  );
};

export default Account;
