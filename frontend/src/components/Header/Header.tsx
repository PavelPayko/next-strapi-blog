import React from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import { Button } from 'antd';
import Bg from '@/components/Bg'
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const Header = ({ }) => {

  const router = useRouter();
  const { header: t } = router.locale === 'ru' ? ru : en;

  return (
    <header className={style.header}>

      <div className={style.container}>

        <div className={style.content}>
          <span className={style.pre}>{t.subtitle}</span>
          <h1 className={style.title}>KVAN<span className={style.color}>DO</span> Technologies</h1>
          <p className={style.desc}>{t.desc}
          </p>
          <div className={style.controls}>
            <Button type='primary' size='large'>
              <Link href='/#contact_us'>{t.buttonPrimary}</Link>
            </Button>
            <Button type='default' size='large'>
              <Link href='/#contact_us'>{t.buttonSecondary}</Link>
            </Button>
          </div>
        </div>
      </div >

      <div className={style.decor}>
        <div className={`${style.animation_circle_inverse} ${style.col_auto}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className={style.shapes}>
          <Bg />
        </div>
      </div>
    </header >
  );
};

export default Header;
