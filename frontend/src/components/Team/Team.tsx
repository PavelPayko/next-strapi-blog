import React, { FC, useRef, useState } from "react";
import Link from "next/link";
import style from "./Team.module.scss";
import Theme from "@/assets/images/theme.png";
// import Image from "next/image";
import { Image, Card, Typography, Carousel } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';
import jsIcon from '@/assets/images/frameworks/javascript.svg'
import tsIcon from '@/assets/images/frameworks/typescript.svg'
import reactIcon from '@/assets/images/frameworks/react.svg'
import vueIcon from '@/assets/images/frameworks/vue.svg'
import laravelIcon from '@/assets/images/frameworks/laravel.svg'
import goIcon from '@/assets/images/frameworks/golang.svg'
import { Employee } from './Team.interface';
import { getStrapiMedia } from '@/lib/media';

const { Meta } = Card;
const { Title } = Typography;

const Team: FC<{
  frontenders?: Employee[]
}> = ({ frontenders = [] }) => {

  console.log('frontenders', frontenders);


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
  return (
    <section className={style.container} id="kvando_team">
      <div className={style.frontend}>
        <Title level={2}>Frontend</Title>
        <div className={style.slider}>
          <Carousel>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Carousel>

        </div>
      </div>

      <div className={style.backend}>
        <Title level={2}>Backend</Title>
        <div className={style.slider}>
          <Carousel
            slidesToShow={3}
            slidesToScroll={3}
          >
            {frontenders.map(ent => {
              const photo = {
                data: ent.attributes.photo.data[0]
              }
              return <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={getStrapiMedia(photo)} />}
              >
                <Meta title={ent.attributes.Name} description={ent.attributes.stack} />
              </Card>
            })}


            {/* <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            /> */}
          </Carousel>

        </div>
      </div>

    </section >

  );
};

export default Team;
