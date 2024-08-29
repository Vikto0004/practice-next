// import 'server-only';

import axios from 'axios';
import { cookies } from 'next/headers';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

type User = {
  email: string;
  password: string;
};

export const createSession = async (user: User) => {
  try {
    const response = await axios.post('/users/login', user);
    const token = response.data.token;
    setAuthHeader(token);

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    cookies().set('session', token, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    });
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};
