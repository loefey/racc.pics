'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import styles from './Footer.module.css';

import lang from '@/locales/en/common.json';

const Footer = () => {
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  return (
    <div className={styles.container}>

      {/* <nav>
        <Link href="/" locale="ca">
          {lang.LANGUAGE_LINK_TEXT}
        </Link>
      </nav> */}

      <p>
        {lang.DEVELOPED_BY}{' '}
        <a href="https://github.com/venqoi">@venqoi</a>
      </p>
    </div>
  );
};

export default Footer;
