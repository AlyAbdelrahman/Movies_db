'use client'
import { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import GoogleLogin from '../signIn/GoogleLogin';
import { useDispatch } from 'react-redux';
import { updateUserData } from '@/provider/reducers/userReducer';


const Account = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
    dispatch(updateUserData({ user: user}));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <GoogleLogin />
    </div>
  );
};

export default Account;
