import React, { FC, useRef, useState } from "react";
import Link from "next/link";
import style from "./Team.module.scss";
import Theme from "@/assets/images/theme.png";
// import Image from "next/image";
import { Typography, Carousel, Tabs, Switch, Card } from 'antd';
import { LikeOutlined, DollarOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import jsIcon from '@/assets/images/frameworks/javascript.svg'
import tsIcon from '@/assets/images/frameworks/typescript.svg'
import reactIcon from '@/assets/images/frameworks/react.svg'
import vueIcon from '@/assets/images/frameworks/vue.svg'
import laravelIcon from '@/assets/images/frameworks/laravel.svg'
import goIcon from '@/assets/images/frameworks/golang.svg'
import { Employee } from './Team.interface';
import { getStrapiMedia } from '@/lib/media';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import Photo from '@/assets/images/Andrew.jpeg'
import Image from 'next/image';
// const { Meta } = Card;
const { Title } = Typography;

const Team: FC<{
  frontenders?: Employee[]
}> = ({ frontenders = [] }) => {

  console.log('frontenders', frontenders);

  const prevIcon = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="5" y1="12" x2="9" y2="16" />
    <line x1="5" y1="12" x2="9" y2="8" />
  </svg>

  const nextIcon = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="15" y1="16" x2="19" y2="12" />
    <line x1="15" y1="8" x2="19" y2="12" />
  </svg>

  const prevHandler = () => {
    if (ref.current) {
      //@ts-ignore
      ref.current.prev()

    }
  }

  const nextHandler = () => {
    if (ref.current) {
      //@ts-ignore
      ref.current.next()
    }
  }

  const cards = [] as Employee[]

  for (let i = 0; i <= 3; i++) {
    frontenders.forEach(item => cards.push(item))
  }

  const items = [
    {
      label: (
        <span>
          {/* <AndroidOutlined /> */}
          Стать партнером
        </span>
      ),
      key: '1',
      children: `Стать партнером`,
    },
    {
      label: (
        <span>
          {/* <Icon /> */}
          Оставить заявку на проект
        </span>
      ),
      key: '2',
      children: `Оставить заявку на проект`,
    }
  ]

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1

  };

  const ref = useRef(null)

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <section className={style.container} id="kvando_team">
      <div className={style.slider}>
        <div className={style.bar}>
          <span className={style.title}>Develop team</span>
          <div className={style.controls}>
            <div onClick={prevHandler}>{prevIcon}</div>
            <div onClick={nextHandler}>{nextIcon}</div>
          </div>
        </div>
        <Carousel
          // slidesToShow={3}
          // slidesToScroll={3}
          {...settings}
          // arrows={true}
          // swipe={true}
          // swipeToSlide
          // prevArrow={<ArrowLeftOutlined />}
          // nextArrow={<ArrowRightOutlined style={{ color: '#000' }} />}
          ref={ref}
          infinite
          className={style.sliderWrp}
        >
          {cards.map(ent => {
            const photo = {
              data: ent.attributes.photo.data[0]
            }
            return <div className={style.cardWrp}>
              <Card cover={<Image src={Photo} alt='photo' width={340} style={{ objectFit: 'cover' }} />} >
                <Card.Meta title={ent.attributes.name} description={ent.attributes.stack} />
              </Card>
            </div>
          })}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Carousel>
      </div>

    </section >

  );
};

export default Team;
