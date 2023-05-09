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
  const imgRef = useRef<HTMLImageElement | null>(null);



  // const scrollHandler = (e: any) => {
  //   if (window.scrollY > document.documentElement.clientHeight) {
  //     const nav = document.getElementById('nav')
  //     if (nav) {
  //       nav.style.maxHeight = '80px'
  //     }
  //   } else {
  //     const nav = document.getElementById('nav')
  //     if (nav) {
  //       nav.style.maxHeight = '0'
  //     }
  //   }
  //   // console.log('e', window.scrollY, document.documentElement.clientHeight);
  // }
  // // const wHeihgt = window.screen.availHeight

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler)

  // }, [])

  const [current, setCurrent] = useState('about');
  const [locale, setLocale] = useState('ru')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const localeChangeHandler: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setLocale(e.key);
  };

  const moveHandler = (e: any) => {
    const x = -(window.innerWidth / 2 - e?.pageX) / 30;
    const y = (window.innerHeight / 2 - e?.pageY) / 10;
    if (imgRef.current) {
      imgRef.current.style.transform = `perspective(20000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
    }
  };

  const arrowHandler = () => {
    scrollTo(0, window.innerHeight)
  }

  const items: MenuProps['items'] = [
    {
      label: <a href="#about" data-hash="#about">
        <span>О НАС</span>
      </a>,
      key: 'about',
    },
    {
      label: <a href="#projects" data-hash="#about">
        <span>ПРОЕКТЫ</span>
      </a>,
      key: 'projects',
    },
    {
      label: <a href="#team" data-hash="#about">
        <span>КОМАНДА</span>
      </a>,
      key: 'team',
    },
    {
      label: <a href="#contacts" data-hash="#about">
        <span>КОНТАКТЫ</span>
      </a>,
      key: 'contacts',
    },
    {
      label: <a href="#vacancy" data-hash="#about">
        <span>ВАКАНСИИ</span>
      </a>,
      key: 'vacancy',
    },
    {
      label: (<Link href="/blog" legacyBehavior>
        <span>Блог</span>
      </Link>),
      key: 'blog',
    },
  ]

  const localeItems: MenuProps['items'] = [
    {
      key: 'ru',
      label: 'RU',
    },
    {
      key: 'eng',
      label: 'ENG',
    },
  ];

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

        {/* <div className={style.content}>
          <div className={style.left}>
            <h2>Что-то о крутой компании </h2>
            <p>Какая-то очень полезная информация. И еще больше очень полезной информации. Целая гора очень полезной информации</p>
          </div>
          <div className={style.right}>
            <div className={`${style.squares} ${style.col}`}>
              <div
                className={`${style.img_fluid} ${style.img} ${style.img_1} ${style.set_abs}`}
              ></div>
              <div
                className={`${style.img_fluid} ${style.img} ${style.img_2} ${style.set_abs}`}
              ></div>
            </div>
            <div className={`${style.theme} ${style.col_auto}"`}>
              <Image
                ref={imgRef}
                src={Theme}
                alt="Picture of the author"
                width="500"
                // height="300px"
                className={`${style.inline}`}
                style={{
                  willChange: "transform",
                  transition: "all 3000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;",
                  transform:
                    "perspective(20000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);",
                }}
                onMouseMove={moveHandler}
              />
            </div>
          </div>
        </div> */}

        {/* <svg className={style.arrow} width={75} onClick={arrowHandler}>
          <polygon className={style.arrow_top} points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
          <polygon className={style.arrow_middle} points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
          <polygon className={style.arrow_bottom} points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
        </svg> */}
        {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
          </path>
        </svg> */}


        {/* <div className={style.arrow} onClick={arrowHandler}>
          <span role="img" aria-label="down" className="anticon anticon-down">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
              </path>
            </svg>
          </span>
        </div> */}

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
