'use client';

import LoginForm from '@/app/[locale]/components/LoginForm/LoginForm';
import Loader from '../loading';
import { useAppSelector } from '@/redux/hooks';
import Error from '../error';
import { useEffect } from 'react';

export default function Login() {
  const errorMessage = useAppSelector(state => state.auth.error);
  const loading = useAppSelector(state => state.auth.loading);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push('/contacts');
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <LoginForm />
      {errorMessage && <Error message={errorMessage} />}
      {loading && <Loader />}
    </>
  );
}
