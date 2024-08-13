'use client';

import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

type Props = {
  message: string;
};

export default function Error({ message }: Props) {
  useEffect(() => {
    toast.error(message);
  }, [message]);

  return <Toaster />;
}
