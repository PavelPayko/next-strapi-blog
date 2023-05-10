import React, { FC, useEffect, useState } from "react";
import style from "./Footer.module.scss";
import { Col, Dropdown, Grid, List, MenuProps, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/K-1.png'
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, YoutubeOutlined } from '@ant-design/icons';
import Vk from '@/assets/svg/Vk'
import Tg from '@/assets/svg/Tg'
const { useBreakpoint } = Grid;

const Footer: FC<{}> = ({ }) => {

  const [locale, setLocale] = useState('ru')
  const { sm, md, xl } = useBreakpoint();

  const [colSize, setColSize] = useState(6)

  useEffect(() => {
    if (xl) {
      console.log('size', 'xl');
      setColSize(6)
    }
    else if (md) {
      console.log('size', 'lg');

      setColSize(8)
    }
    else if (sm) {
      console.log('size', 'lg');

      setColSize(12)
    } else {
      setColSize(24)
    }

  }, [xl, md, sm])

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

  // const colSize = xl ? 6 : 8

  return (
    <footer className={style.container}>

      <Row className={style.links}>
        <Col span={colSize} className={style.contactsLeft}>
          <div className={style.contentWrp}>
            <Link href={"/"} >
              <MailOutlined /> kvandotech@gmail.com
            </Link>
            <Link href={"/"} >
              <PhoneOutlined /> 89006931895
            </Link>
            <Link href={"/"} >
              <EnvironmentOutlined /> Брянск, Дуки 69 , оф 306
            </Link>
          </div>
        </Col>

        <Col span={6} className={style.navLeft}>
          <div className={style.contentWrp}>
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
          </div>
        </Col>

        <Col span={colSize} className={style.navRight}>
          <div className={style.contentWrp}>
            <Link href={"/#contact_us"} >
              Стать партнером
            </Link>
            <Link href={"/#contact_us"} >
              Оставить заявку на проект
            </Link>
          </div>
        </Col>

        <Col span={colSize} className={style.contactsRight}>
          <div className={style.contentWrp}>
            <Link href={"https://vk.com/kvandotech"} style={{ marginLeft: '-5px' }} >
              <Vk />Vk
            </Link>
            <Link href={"https://t.me/do_with_kvando"} >
              <Tg color="#000" />Telegram
            </Link>
            <Link href={"https://www.youtube.com/@igorkhristenko5444"} >
              <YoutubeOutlined style={{ fontSize: '30px' }} />YouTube
            </Link>
          </div>
        </Col>
      </Row>

      <Row className={style.privacy}>
        <Col span={md ? 8 : 10} className={style.logo}>
          <Link href={"/"} >
            <Image src={Logo} alt='Kvando' width={md ? 200 : 150} />
          </Link>
        </Col>
        <Col span={md ? 8 : 14} className={style.privacyLink}>
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
