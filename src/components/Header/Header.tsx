'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import NavLink from '../NavLink/NavLink';
import css from './Header.module.css';
import { useEffect } from 'react';
import { logOutUser, refreshUser } from '@/redux/auth/operations';

export default function Header() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const userName = useAppSelector(state => state.auth.user.name);
  const dispatch = useAppDispatch();

  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <NavLink href="/">Home</NavLink>
        {isLoggedIn && <NavLink href="/contacts">Contacts</NavLink>}
      </div>
      {!isLoggedIn && (
        <div className={css.wrap}>
          <NavLink href="/register">Register</NavLink>
          <NavLink href="/login">Log In</NavLink>
        </div>
      )}
      {isLoggedIn && (
        <div className={css.wrap}>
          <p className={css.text}>Hello, {userName}!</p>
          <button
            className={css.button}
            onClick={() => dispatch(logOutUser())}
            type="button"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
