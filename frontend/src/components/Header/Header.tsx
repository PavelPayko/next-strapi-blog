import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Dropdown, Menu, MenuProps, Tabs } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import Bg from '@/components/Bg'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const Header = ({ }) => {
  return (
    <header className={style.header}>

      <div className={style.container}>

        <div className={style.content}>
          <span className={style.pre}>аутстафф/аутсорс компания.</span>
          <h1 className={style.title}>KVAN<span className={style.color}>DO</span> Technologies</h1>
          <p className={style.desc}>Всегда готовы быстро усилить вашу IT команду
            и выполнить проект любой сложности под ключ.
          </p>
          <div className={style.controls}>
            <Button type='primary' size='large'>
              <Link href='/#contact_us'>Стать партнером</Link>
            </Button>
            <Button type='default' size='large'>
              <Link href='/#contact_us'>Оценить проект</Link>
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
