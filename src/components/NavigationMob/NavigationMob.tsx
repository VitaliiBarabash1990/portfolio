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

  return <ul className={clsx(s.navMenu, isModal && s.navMenu_modal)}></ul>;
};
