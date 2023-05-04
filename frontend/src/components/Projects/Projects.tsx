import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./Projects.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Typography, Divider, List } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';
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
      title: 'Банки и финансы',
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
      cover: <Image src={icon_4} alt='bg' width={440} />
    },
    {
      title: 'Банки и финансы',
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
      cover: <Image src={icon_1} alt='bg' width={440} />
    },
    {
      title: 'Банки и финансы',
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
      cover: <Image src={icon_2} alt='bg' width={440} />
    },
    {
      title: 'Банки и финансы',
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
      cover: <Image src={icon_3} alt='bg' width={440} />
    },
    {
      title: 'Банки и финансы',
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
      cover: <Image src={icon_6} alt='bg' width={440} />
    },
    {
      title: 'Банки и финансы',
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
      cover: <Image src={icon_5} alt='bg' width={440} />
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
        grid={{ gutter: 32, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item >
            {/* <Card title={item.title}>Card content</Card> */}
            <StyledCard title={item.title} desc={item.desc} cover={item.cover} />
          </List.Item>
        )}
      />

    </section >
  );
};

export default Projects;
