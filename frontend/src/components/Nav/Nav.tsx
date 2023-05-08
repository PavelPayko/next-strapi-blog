import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Nav.module.scss";
import { Divider, Dropdown, Menu, MenuProps } from 'antd';
import Logo from '@/assets/images/K-1.png'
import { MenuOutlined } from '@ant-design/icons';
import { log } from 'console';

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
    if (e.key === 'blog' || e.key === 'vacancy') {
      setCurrent(e.key);
    }
  };

  const localeChangeHandler: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setLocale(e.key);
  };


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

  const items: MenuProps['items'] = [
    {
      label: <Link href="/#about">О НАС</Link>,
      key: 'about',
    },
    {
      label: <a href="/#projects" data-hash="#projects">
        <span>ПРОЕКТЫ</span>
      </a>,
      key: 'projects',
    },
    {
      label: <a href="/#team" data-hash="#team">
        <span>КОМАНДА</span>
      </a>,
      key: 'team',
    },
    {
      label: <a href="#contacts" data-hash="#contacts">
        <span>КОНТАКТЫ</span>
      </a>,
      key: 'contacts',
    },
    {
      label: <a href="/vacancy">
        <span>ВАКАНСИИ</span>
      </a>,
      key: 'vacancy',
    },
    {
      label: (<Link href="/blog">
        <span>БЛОГ</span>
      </Link>),
      key: 'blog',
    },
    {
      label: (<Dropdown
        menu={{
          items: localeItems,
          selectable: true,
          defaultSelectedKeys: [locale],
          onClick: localeChangeHandler,
        }}
        placement="bottom"
        className={style.localeInner}
      >
        <span>{locale.toUpperCase()}</span>
      </Dropdown>),
      key: 'locale',
    },
  ]

  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    console.log('select', key, selectedKeys)
  }

  return (
    <div className={style.wrp} ref={navRef}>
      <div className="logo" >
        <Link href={"/"} >
          <Image src={Logo} alt='Kvando' width={200} />
        </Link>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ flex: "auto", minWidth: 0 }}
        className={style.menu}
        overflowedIndicator={<MenuOutlined />}
        onSelect={onSelect}
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
