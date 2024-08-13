'use client';

import LoginForm from '@/components/LoginForm/LoginForm';
import Loader from '../loading';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import Error from '../error';

export default function Login() {
  const errorMessage = useAppSelector(state => state.auth.error);
  const loading = useAppSelector(state => state.auth.loading);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/contacts');
    }
  }, [isLoggedIn, router]);

  return isLoggedIn ? (
    <>
      <LoginForm />
      {errorMessage && <Error message={errorMessage} />}
      {loading && <Loader />}
    </>
  ) : (
    <Loader />
  );
}
