import React, { FC, useRef, useState } from "react";
import { Gallery } from './Gallery.interface';
import { getStrapiMedia } from '@/lib/media';
import Image from 'next/image';
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import style from './Gallery.module.scss'

const Gallery: FC<{
  gallery?: Gallery
}> = ({ gallery }) => {

  const router = useRouter();
  const t = router.locale === 'ru' ? ru : en;

  const ref = useRef(null)

  const url = getStrapiMedia(gallery?.attributes.main.data) || ''

  return (
    <div className={style.container}>
      <div className={style.grid}>
        {gallery?.attributes.data.data.map((image, i) => {
          const url = getStrapiMedia(image) || ''
          return (
            <div className={style.cell} key={image?.data?.id || i}>
              <Image src={url} width={456} height={304} alt='photo' style={{ objectFit: 'cover' }} />
            </div>
          )
        })}
        <Image src={url} alt='photo' width={1248} height={832} style={{ objectFit: 'cover' }} className={style.cell} />
      </div>
      {/* <div className={style.main}>
      </div> */}
    </div>

  );
};

export default Gallery;
