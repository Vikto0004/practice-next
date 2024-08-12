'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './NavLink.module.css';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? css.active : css.link}>
      {children}
    </Link>
  );
};

export default NavLink;
