'use client';

import Loader from '@/app/loading';
import { refreshUser } from '@/redux/auth/operations';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

export default function Refreshing({
  children,
}: {
  children: React.ReactNode;
}) {
  const isRefreshing = useAppSelector(state => state.auth.isRefreshing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <Loader /> : children;
}
