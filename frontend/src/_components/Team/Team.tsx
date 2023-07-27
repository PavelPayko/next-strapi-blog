import React, { FC, useRef, useState } from "react";
import style from "./Team.module.scss";
import { Carousel, Card } from 'antd';
import { Employee } from './Team.interface';
import { getStrapiMedia } from '@/lib/media';
import Image from 'next/image';
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const Team: FC<{
  developers?: Employee[]
}> = ({ developers = [] }) => {

  const router = useRouter();
  const t = router.locale === 'ru' ? ru : en;

  const prevIcon = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="5" y1="12" x2="9" y2="16" />
    <line x1="5" y1="12" x2="9" y2="8" />
  </svg>

  const nextIcon = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
    developers.forEach(item => cards.push(item))
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ref = useRef(null)

  return (
    <section className={style.container} id="team">
      <PageTitle title={t.team.pageTitle} />
      <div className={style.slider}>
        <div className={style.bar}>
          {/* <span className={style.title}>Develop team</span> */}
          <div className={style.controls}>
            <div onClick={prevHandler}>{prevIcon}</div>
            <div onClick={nextHandler}>{nextIcon}</div>
          </div>
        </div>
        <Carousel
          {...settings}
          ref={ref}
          infinite
          className={style.sliderWrp}
        // style={{ width: '800px' }}
        >
          {cards.map(ent => {

            const url = getStrapiMedia(ent.attributes.photo.data)

            return <div className={style.cardWrp} key={ent.id}>
              <Card cover={<Image src={url} alt='photo' width={340} height={340} style={{ objectFit: 'cover', objectPosition: 'top' }} />} >
                <Card.Meta title={ent.attributes.name} description={ent.attributes.position} />
              </Card>
            </div>
          })}
        </Carousel>
      </div>

    </section >

  );
};

export default Team;
