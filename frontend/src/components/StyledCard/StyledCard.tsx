import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./StyledCard.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card as AntCard, Typography, Divider } from 'antd';
import { LikeOutlined, DollarOutlined, BankOutlined, CaretUpOutlined } from '@ant-design/icons';
import YBG from '@/assets/images/YBG.png'
import BG from '@/assets/images/icon_4.jpg'

const { Meta } = AntCard;
const { Title } = Typography;

const StyledCard: React.FC<{
  title: string,
  desc?: string,
  cover?: JSX.Element
}> = ({ title, desc, cover }) => {

  const [isFlip, setIsFlip] = useState(true)
  const cardRef = useRef(null as any)

  const overHandler = () => {
    cardRef.current.style.transition = 'all 800ms'
    cardRef.current.style.transform = 'rvotateY(180deg)'

    setTimeout(() => {
      setIsFlip(true)
    }, 200)

  }
  const outHandler = () => {
    cardRef.current.style.transition = 'all 800ms'
    cardRef.current.style.transform = 'rotateY(0deg)'

    setTimeout(() => {
      setIsFlip(false)
    }, 200)

  }

  const coverStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const titleContent = !isFlip && <span>{title}<Button onClick={() => setIsFlip(prev => !prev)}>Подробнее <CaretUpOutlined /></Button></span>

  const descriptionContent = (isFlip && desc) && <span className={style.flipText}>{desc}</span>

  return (
    <div className={style.card}
    // onMouseOver={overHandler}
    // onMouseOut={outHandler}
    >
      <AntCard
        hoverable
        // style={{ maxWidth: 440 }}
        // cover={!isFlip && <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        // className={style.card}
        ref={cardRef}
        // bodyStyle={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        cover={<div className={`${style.cover} ${!isFlip ? style.height : ''}`} style={{ display: 'flex' }}>
          <div className={style.icon} >
            {cover}
            <div className={style.circles}>
              <div className={style.circle_one}></div>
              <div className={style.circle_two}></div>
            </div>
          </div>
        </div>}
      >
        <Meta
          title={<span className={style.title}>
            {title}
            {/* <Button type='primary' onClick={() => setIsFlip(prev => !prev)}><CaretUpOutlined /></Button> */}
            <Button type="primary" shape="circle" icon={<CaretUpOutlined />} onClick={() => setIsFlip(prev => !prev)} />
          </span>}
          description={<div className={`${style.desc} ${isFlip ? style.height : ''}`}>{desc}</div>}
        />
      </AntCard>
      {/* <div className={style.desc}>
        <div className={style.text}>
          'Платежный сервис
          Личный кабинет заемщика
          Сервис для управления задачами работников
          Внутренняя CRM система для сотрудников
          банка
          Разработка платформы для развертывания
          микросервисов, Order Management системы,
          системы авторизации
          Разработка банковского календаря для
          сотрудников'
        </div>
      </div> */}
      {/* {
        isFlip
          ? <AntCard
            hoverable
            style={{ width: 240 }}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            className={style.card}
            // onMouseEnter={hoverHandler}
            // onMouseOut={blurHandler}
            ref={cardRef}
          >
            <Meta title="Flip" description="Flip" />
          </AntCard>
          : <AntCard
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            // onMouseEnter={hoverHandler}
            // onMouseOut={blurHandler}
            ref={cardRef}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </AntCard>
      } */}
    </div>
  );
};

export default StyledCard;
