import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import css from './NavLink.module.css';

type PropsType = {
  href: string;
  children: ReactNode;
  [key: string]: unknown;
};

export default function NavLink({ href, styles, children }: PropsType) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${pathName === href ? css.active : ''} ${styles} `}
    >
      {children}
    </Link>
  );
}
