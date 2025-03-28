import {useTranslations} from 'next-intl';
import NavigationLink from '../NavigationLink/NavigationLink';
import s from './NavigationMob.module.css';
import clsx from 'clsx';
import {UrlObject} from 'url';

type MyComponentProps = {
  isModal: boolean;
  setMenuOpen: (open: boolean) => void; // Указываем конкретный тип
};

type LinkData = {
  id: number;
  link: '/' | '/services' | '/gallery' | '/courses' | '/contacts';
  text: string;
};

export const NavigationMob = ({isModal, setMenuOpen}: MyComponentProps) => {
  const handlerSubmit = () => {
    isModal && setMenuOpen(false);
  };

  const t = useTranslations('Navigation');

  const linkDatas: LinkData[] = [
    {id: 0, link: '/', text: t('home')},
    {id: 1, link: '/services', text: t('services')},
    {id: 2, link: '/gallery', text: t('gallery')},
    {id: 3, link: '/courses', text: t('courses')},
    {id: 4, link: '/contacts', text: t('contacts')}
  ];

  return (
    <ul className={clsx(s.navMenu, isModal && s.navMenu_modal)}>
      {linkDatas.map((linkData) => (
        <li key={linkData.id} className={s.navMenu__item_link}>
          <NavigationLink
            className={s.navMenu__link}
            href={linkData.link}
            onClick={handlerSubmit}
          >
            {linkData.text}
          </NavigationLink>
        </li>
      ))}
    </ul>
  );
};
