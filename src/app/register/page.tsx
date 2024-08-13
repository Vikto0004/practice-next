'use client';

import { useAppSelector } from '@/redux/hooks';
import Error from '../error';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Loader from '../loading';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const errorMessage = useAppSelector(state => state.auth.error);
  const loading = useAppSelector(state => state.auth.loading);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/contacts');
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <RegisterForm />
      {errorMessage && <Error message={errorMessage} />}
      {loading && <Loader />}
    </>
  );
}
