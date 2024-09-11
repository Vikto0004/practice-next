'use client';

import { useTranslations } from 'next-intl';
import { IoChevronDown } from 'react-icons/io5';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from '@/i18n/routing';
import css from './PopoverList.module.css';

export default function PopoverList() {
  const t = useTranslations('Header');

  return (
    <Popover className={css.popover}>
      {({ open, close }) => (
        <>
          {open && <div onClick={() => close} className={css.overlay}></div>}
          <PopoverButton className={css.popoverButton}>
            {t('cooperationFund.title')}
            <IoChevronDown
              className={open ? css.popoverIconActive : ''}
              size="24px"
            />
          </PopoverButton>
          <PopoverPanel anchor="bottom" className={css.popoverPanel}>
            <Link
              href="/join-us"
              onClick={() => close()}
              className={css.popoverPanelLink}
            >
              {t('cooperationFund.joinTeam')}
            </Link>
            <Link
              href="/details-of-tenders"
              onClick={() => close()}
              className={css.popoverPanelLink}
            >
              {t('cooperationFund.requestsOffers')}
            </Link>
            <Link
              href="/payment-by-card"
              onClick={() => close()}
              className={css.popoverPanelLink}
            >
              {t('cooperationFund.helpFund')}
            </Link>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
