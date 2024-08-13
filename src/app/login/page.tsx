'use client';

import LoginForm from '@/components/LoginForm/LoginForm';
import Loader from '../loading';
import { useAppSelector } from '@/redux/hooks';
import Error from '../error';

export default function Login() {
  const errorMessage = useAppSelector(state => state.auth.error);
  const loading = useAppSelector(state => state.auth.loading);

  return (
    <>
      <LoginForm />
      {errorMessage && <Error message={errorMessage} />}
      {loading && <Loader />}
    </>
  );
}
