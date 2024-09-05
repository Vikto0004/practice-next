'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import css from './NavLink.module.css';
import StoreProvider from '@/app/[locale]/StoreProvider';
import Header from '../Header/Header';
import Refreshing from '../Refreshing/Refreshing';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? css.active : css.link}>
      {children}
    </Link>
  );
}
