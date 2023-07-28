import React, { FC, useRef, useState } from "react";
import { Gallery } from './Gallery.interface';
import { getStrapiMedia } from '@/lib/media';
import Image from 'next/image';
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import style from './Gallery.module.scss'
import { Grid } from 'antd';
import classNames from 'classnames';

const { useBreakpoint } = Grid

const Gallery: FC<{
  gallery?: Gallery
}> = ({ gallery }) => {

  const { md } = useBreakpoint()

  const router = useRouter();
  const t = router.locale === 'ru' ? ru : en;

  const ref = useRef(null)

  const url = getStrapiMedia(gallery?.attributes.main.data) || ''

  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.grid, { [style.mobile]: !md })}>
        {md && gallery?.attributes.data.data.map((image, i) => {
          const url = getStrapiMedia(image) || ''
          return (
            <div className={style.cell} key={image?.data?.id || i}>
              <Image src={url} width={456} height={304} alt='photo' style={{ objectFit: 'cover' }} />
            </div>
          )
        })}
        <Image src={url} alt='photo' width={1248} height={832} style={{ objectFit: 'cover' }} className={classNames(style.cell)} />
      </div>
      {/* <div className={style.main}>
      </div> */}
    </div>

  );
};

export default Gallery;
