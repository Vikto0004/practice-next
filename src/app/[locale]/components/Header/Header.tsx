'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import NavLink from '../NavLink/NavLink';
import css from './Header.module.css';
import { logOutUser } from '@/redux/auth/operations';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function Header() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const userName = useAppSelector(state => state.auth.user.name);
  const dispatch = useAppDispatch();

  const t = useTranslations('HomePage');
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocal = e.target.value as 'en' | 'ua';
    router.replace(pathname, { locale: nextLocal });
  };

  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <NavLink href={`/${locale}`}>{t('header.home')}</NavLink>
        {isLoggedIn && <NavLink href="/contacts">Contacts</NavLink>}
      </div>
      {!isLoggedIn && (
        <div className={css.wrap}>
          <NavLink href={`/${locale}/register`}>{t('header.register')}</NavLink>
          <NavLink href={`/${locale}/login`}>{t('header.login')}</NavLink>
        </div>
      )}
      <select defaultValue={locale} onChange={selectChange}>
        <option value="en">English</option>
        <option value="ua">Ukrainian</option>
      </select>
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
