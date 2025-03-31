// import {useTranslations} from 'next-intl';
import NavigationLink from '../NavigationLink/NavigationLink';
import s from './NavigationMob.module.css';
import clsx from 'clsx';

type MyComponentProps = {
  isModal: boolean;
  setMenuOpen: (open: boolean) => void;
};

type LinkData = {
  id: number;
  link: '/';
  text: string;
};

export const NavigationMob = ({isModal, setMenuOpen}: MyComponentProps) => {
  const handlerSubmit = () => {
    isModal && setMenuOpen(false);
  };

  // const t = useTranslations('Navigation');

  // const linkDatas: LinkData[] = [{id: 0, link: '/', text: t('')}];

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
