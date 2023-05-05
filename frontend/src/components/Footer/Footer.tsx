import React, { FC, useState } from "react";
import style from "./Footer.module.scss";
import { Col, Dropdown, List, MenuProps, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/K-1.png'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, YoutubeOutlined } from '@ant-design/icons';
import Vk from '@/assets/svg/Vk'
import Tg from '@/assets/svg/Tg'

const Footer: FC<{}> = ({ }) => {

  const [locale, setLocale] = useState('ru')

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

  const localeChangeHandler: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setLocale(e.key);
  };

  return (
    <footer className={style.container}>

      <Row className={style.links}>
        <Col span={6} className={style.contactsLeft}>
          <Link href={"/"} >
            <MailOutlined /> kvandotech@gmail.com
          </Link>
          <Link href={"/"} >
            <PhoneOutlined /> 89006931895
          </Link>
          <Link href={"/"} >
            <EnvironmentOutlined /> Брянск, Дуки 69 , оф 306
          </Link>
        </Col>

        <Col span={6} className={style.navLeft}>
          <Link href={"/"} >
            О компании
          </Link>
          <Link href={"/"} >
            Проекты
          </Link>
          <Link href={"/"} >
            Команда
          </Link>
          <Link href={"/"} >
            Вакансии
          </Link>
        </Col>

        <Col span={6} className={style.navRight}>
          <Link href={"/#contact_us"} >
            Стать партнером
          </Link>
          <Link href={"/#contact_us"} >
            Оставить заявку на проект
          </Link>
        </Col>

        <Col span={6} className={style.contactsRight}>
          <Link href={"https://vk.com/kvandotech"} style={{ marginLeft: '-5px' }} >
            <Vk />Vk
          </Link>
          <Link href={"https://t.me/do_with_kvando"} >
            <Tg color="#000" />Telegram
          </Link>
          <Link href={"https://www.youtube.com/@igorkhristenko5444"} >
            <YoutubeOutlined style={{ fontSize: '30px' }} />YouTube
          </Link>
        </Col>
      </Row>

      <Row className={style.privacy}>
        <Col span={8} className={style.logo}>
          <Link href={"/"} >
            <Image src={Logo} alt='Kvando' width={200} />
          </Link>
        </Col>
        <Col span={8} className={style.privacyLink}>
          <Link href={"/privacy"} >
            ⓒ Конфиденциальность 2023
          </Link>
        </Col>
        <Col span={8} className={style.locale}>
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
        </Col>
      </Row>
    </footer >
  );
};

export default Footer;