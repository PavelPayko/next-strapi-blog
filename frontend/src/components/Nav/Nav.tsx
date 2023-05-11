import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Nav.module.scss";
import { Divider, Dropdown, Menu, MenuProps } from 'antd';
import Logo from '@/assets/images/K-1.png'
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'

const Nav: React.FC<{
  categories?: any
}> = ({ }) => {

  const router = useRouter();
  const { nav: t } = router.locale === 'ru' ? ru : en;
  const { pathname, asPath } = router

  const navRef = useRef(null as HTMLDivElement | null)
  const [current, setCurrent] = useState('');
  const [locale, setLocale] = useState(router.locale || 'ru')

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

  const localeChangeHandler: MenuProps['onClick'] = ({ key }) => {
    setLocale(key);
    router.push(pathname, asPath, { locale: key })
  };


  const localeItems: MenuProps['items'] = [
    {
      key: 'ru',
      label: 'RU',
    },
    {
      key: 'en',
      label: 'EN',
    },
  ];

  const items: MenuProps['items'] = [
    {
      label: <Link href="/#about">{t.about.toUpperCase()}</Link>,
      key: 'about',
    },
    {
      label: <Link href="/#projects">{t.projects.toUpperCase()}</Link>,
      key: 'projects',
    },
    {
      label: <Link href="/#team">{t.team.toUpperCase()}</Link>,
      key: 'team',
    },
    {
      label: <Link href="/#contacts">{t.contacts.toUpperCase()}</Link>,
      key: 'contacts',
    },
    {
      label: <Link href="/vacancy">{t.vacancy.toUpperCase()}</Link>,
      key: 'vacancy',
    },
    {
      label: <Link href="/blog">{t.blog.toUpperCase()}</Link>,
      key: 'blog',
    },
    { type: 'divider' },
    {
      label: <span>{router.locale?.toUpperCase()}</span>,
      key: 'locale',
      children: [
        {
          label: <Link href={pathname} as={asPath} locale={'ru'}>RU</Link>,
          key: 'ru'
        },
        {
          label: <Link href={pathname} as={asPath} locale={'en'}>EN</Link>,
          key: 'en'
        },
      ]
    },
    // {
    //   label: (<Dropdown
    //     menu={{
    //       items: localeItems,
    //       selectable: true,
    //       defaultSelectedKeys: [locale],
    //       onClick: localeChangeHandler,
    //     }}
    //     placement="bottom"
    //     className={style.localeInner}
    //   >
    //     <span>{locale?.toUpperCase()}</span>
    //   </Dropdown>),
    //   key: 'locale',
    //   style: { marginLeft: '32px' }
    // },
  ]

  const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    console.log('select', key, selectedKeys)
  }

  return (
    <div className={style.wrp} ref={navRef}>
      <div className={style.logo} >
        <Link href={"/"} >
          <Image src={Logo} alt='Kvando' width={200} />
        </Link>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        // style={{ flex: "auto", minWidth: 0 }}
        className={style.menu}
        overflowedIndicator={<MenuOutlined />}
        onSelect={onSelect}
      />

      {/* <div className={style.locale}>
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
      </div> */}
    </div>
  );
};

export default Nav;
