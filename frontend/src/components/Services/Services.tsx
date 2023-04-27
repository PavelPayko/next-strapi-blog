import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./Services.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Typography, Divider } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';
import jsIcon from '@/assets/images/frameworks/javascript.svg'
import tsIcon from '@/assets/images/frameworks/typescript.svg'
import reactIcon from '@/assets/images/frameworks/react.svg'
import vueIcon from '@/assets/images/frameworks/vue.svg'
import laravelIcon from '@/assets/images/frameworks/laravel.svg'
import goIcon from '@/assets/images/frameworks/golang.svg'

const { Meta } = Card;
const { Title } = Typography;

const Services = ({ }) => {

  return (
    <section className={style.container} id="services">
      <div className={style.content}>
        <Title level={2}>Создаём веб-приложения на заказ для стартапов и корпоративных клиентов с использованием современных технологий</Title>
      </div>
      <div className={style.icons}>
        <div className={style.row1}>
          <div className={style.grid}>
            <Image
              src={jsIcon}
              alt="Picture of the author"
              width="200"
              height="200"
            />
          </div>
          <div className={style.grid}>
            <Image
              src={reactIcon}
              alt="Picture of the author"
              width="200"
            />
          </div>
          <div className={style.grid}>
            <Image
              src={goIcon}
              alt="Picture of the author"
              width="200"
            />
          </div>
        </div>
        <div className={style.row2}>
          <div className={style.grid}>
            <Image
              src={tsIcon}
              alt="Picture of the author"
              width="200"
              height={200}
            />
          </div>
          <div className={style.grid}>
            <Image
              src={vueIcon}
              alt="Picture of the author"
              width="200"
            />
          </div>
          <div className={style.grid}>
            <Image
              src={laravelIcon}
              alt="Picture of the author"
              width="200"
            />
          </div>
        </div>
      </div>

    </section >
  );
};

export default Services;
