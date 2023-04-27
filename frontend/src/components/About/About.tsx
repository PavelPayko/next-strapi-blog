import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./About.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Typography, Divider } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const About = ({ }) => {

  return (
    <section className={style.container} id='about'>
      <div className={style.download}>
        <Button>Скачать презентацию</Button>
      </div>
      <div className={style.content}>
        <Title level={2}>KVANDO Technologies классическая аутстафф компания. Мы всегда готовы быстро усилить вашу IT команду.</Title>

        <div>
          <Title level={3}>
            KVANDO - это быстро, выгодно и надежно.
            Мы предложим Вам специалистов разного уровня: Junior | Middle | Senior.
            Под ваши требования:
          </Title>
          <ul>
            <li>с учетом стека;</li>
            <li>фреймворка;</li>
            <li>уровня английского языка.</li>
          </ul>

        </div>
        <Divider />

        <div>
          <Title level={3}>Почему аутстафф персонала это выгодно?:</Title>
          <ul>
            <li>Оптимизация расходов компании</li>
            <li>Снижение затрат на обслуживание штатных сотрудников</li>
            <li>Аутстафф позволяет решить задачу привлечения специалиста за несколько дней</li>
            <li>С вашей компании сняты обязательства по трудовым спорам с сотрудниками</li>
            <li>Обеспечение гибкости в управлении персоналом.</li>
          </ul>
        </div>
        <Divider />

        <Title level={3}>Наймите IT специалиста в вашу команду по выгодным часовым ставкам.</Title>
      </div>
    </section >
  );
};

export default About;
