'use client';

import { useAppSelector } from '@/redux/hooks';
import Error from '../error';
import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Loader from '../loading';

export default function Register() {
  const errorMessage = useAppSelector(state => state.auth.error);
  const loading = useAppSelector(state => state.auth.loading);

  return (
    <>
      <RegisterForm />
      {errorMessage && <Error message={errorMessage} />}
      {loading && <Loader />}
    </>
  );
}
