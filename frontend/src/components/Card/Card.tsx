import React, { FC } from "react";
import style from "./Card.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import Tg from '@/assets/svg/TgRound'

const Card: FC<{
  name: string;
  position: string;
  imageUrl: string;
  size: 'small' | 'big';
  link?: string;
}> = ({ imageUrl, name, position, size = 'small', link }) => {

  const width = size === 'small' ? '346' : '488'
  const height = size === 'small' ? '362' : '529'

  const validateTg = (link: string) => {
    if (link.includes('@')) {
      return `https://t.me/${link.replace('@', '')}`
    }
    if (link.includes('https://t.me')) {
      return link
    }

    return false
  }

  const tgLink = link && validateTg(link)

  return <div className={style.cardWrp}>
    <Image src={imageUrl} alt='photo' width={width} height={height} style={{ objectFit: 'cover', objectPosition: 'top' }} />
    <div className={style.content} style={{ width: `${width}px` }}>
      <div>
        <div>{name}</div>
        <div>{position}</div>
      </div>
      {tgLink && <Link href={tgLink}><Tg /></Link>}
    </div>
  </div >
};

export default Card;
