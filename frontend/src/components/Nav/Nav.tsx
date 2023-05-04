import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import style from "./Nav.module.scss";
import { Dropdown, Menu, MenuProps } from 'antd';

const Nav: React.FC<{
  categories?: any
}> = ({ }) => {

  const navRef = useRef(null as HTMLDivElement | null)
  const [current, setCurrent] = useState('');
  const [locale, setLocale] = useState('ru')



  // const wHeihgt = window.screen.availHeight

  useEffect(() => {
    const aboutSection = document?.getElementById('about')
    const aboutClientHeight = aboutSection?.clientHeight || 0
    const aboutSectionPos = (aboutSection?.getBoundingClientRect().top || 0) + window.scrollY

    const scrollHandler = (e: any) => {
      if (window.scrollY > document?.documentElement?.clientHeight) {
        // const nav = document.getElementById('nav')
        if (navRef.current) {
          // navRef.current.style.maxHeight = '80px'
          // navRef.current.style.position = 'fixed'
        }
      } else {
        // const nav = document.getElementById('nav')
        if (navRef.current) {
          // navRef.current.style.maxHeight = '0'
          // navRef.current.style.position = 'relative'
        }
      }

      const posTop = aboutSection?.getBoundingClientRect().top || 0;

      console.log(aboutSectionPos, window.scrollY);
      if (aboutSectionPos == window.scrollY) {
        console.log('about');

        setCurrent('about')
        // elem.classList.add('visible');
        // document.removeEventListener('scroll', onScroll);
      }
      // console.log('e', window.scrollY, document.documentElement.clientHeight);
    }

    window.addEventListener('scroll', scrollHandler)

  }, [])

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const localeChangeHandler: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setLocale(e.key);
  };

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
    <div className={style.wrp} ref={navRef}>
      <div className="logo" >
        <a
          id="logo"
          href="https://kvando.tech/ru"
          title="Qualitative software development"
          data-height="60"
          data-padding="10"
        >
          <img
            className="logo-main scale-with-grid "
            src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
            data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
            data-height="1500"
            alt="K"
            data-no-retina=""
            width={250}
          />
        </a>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ flex: "auto", minWidth: 0 }}
        className={style.menu}
      />

      <div className={style.locale}>
        <Dropdown
          menu={{
            items: localeItems,
            selectable: true,
            defaultSelectedKeys: [locale],
            onClick: localeChangeHandler,
          }}
          placement="bottom"
        >
          <span>{locale.toUpperCase()}</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
