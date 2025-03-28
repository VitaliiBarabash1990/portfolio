import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import CustomLink from '../CustomLink/CustomLink';
import s from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <div className={`container ${s.footer__container}`}>
      <ul className={s.footer__left_list}>
        <li>
          <Link href="/services" rel="stylesheet">
            {t('our_servises')}
          </Link>
        </li>
      </ul>

      <ul className={s.footer__center_list}>
        <li>
          <Link href={{pathname: '/', hash: 'About'}} rel="stylesheet">
            {t('about_master')}
          </Link>
        </li>
      </ul>
    </div>
  );
}
