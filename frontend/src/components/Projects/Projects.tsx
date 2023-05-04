import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./Projects.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Typography, Divider, List } from 'antd';
import { LikeOutlined, DollarOutlined, BankOutlined, BookOutlined, CommentOutlined, UsergroupAddOutlined, CompassOutlined, TrademarkOutlined } from '@ant-design/icons';
import jsIcon from '@/assets/images/frameworks/javascript.svg'
import tsIcon from '@/assets/images/frameworks/typescript.svg'
import reactIcon from '@/assets/images/frameworks/react.svg'
import vueIcon from '@/assets/images/frameworks/vue.svg'
import laravelIcon from '@/assets/images/frameworks/laravel.svg'
import goIcon from '@/assets/images/frameworks/golang.svg'
import StyledCard from '../StyledCard/StyledCard';
import PageTitle from '../PageTitle/PageTitle';
import icon_1 from '@/assets/images/icon_1.jpg'
import icon_2 from '@/assets/images/icon_2.jpg'
import icon_3 from '@/assets/images/icon_3.jpg'
import icon_4 from '@/assets/images/icon_4.jpg'
import icon_5 from '@/assets/images/icon_5.jpg'
import icon_6 from '@/assets/images/icon_6.jpg'

const { Meta } = Card;
const { Title } = Typography;

const Projects = ({ }) => {

  const data = [
    {
      title: 'FinTech',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <BankOutlined />
    },
    {
      title: 'EdTech',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <BookOutlined />
    },
    {
      title: 'Телекоммуникации',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <CommentOutlined />
    },
    {
      title: 'HrTech',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <UsergroupAddOutlined />
    },
    {
      title: 'Туризм',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <CompassOutlined />
    },
    {
      title: 'Маркетплейсы',
      desc: `Платежный сервис 
        Личный кабинет заемщика
        Сервис для управления задачами работников
        Внутренняя CRM система для сотрудников
        банка
        Разработка платформы для развертывания
        микросервисов, Order Management системы,
        системы авторизации
        Разработка банковского календаря для
        сотрудников`,
      cover: <TrademarkOutlined />
    },
  ];

  return (
    <section className={style.container} id="services">
      <PageTitle title='Projects' />
      <List
        // grid={{
        //   gutter: 16,
        //   xs: 1,
        //   sm: 2,
        //   md: 4,
        //   lg: 4,
        //   xl: 6,
        //   xxl: 3,
        // }}
        grid={{ gutter: 8, column: 3 }}
        className={style.list}
        dataSource={data}
        renderItem={(item) => (
          <List.Item className={style.card} >
            {/* <Card title={item.title}>Card content</Card> */}
            <StyledCard title={item.title} desc={item.desc} cover={item.cover} />
          </List.Item>
        )}
      />

    </section >
  );
};

export default Projects;
