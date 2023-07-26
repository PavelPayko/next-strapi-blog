import React, { FC, useRef, useState } from "react";
import style from "./ContactCard.module.scss";
import { Card, Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import Tg from '@/assets/svg/Tg'
import Mail from '@/assets/svg/Mail'
import Image from 'next/image';
import { Attributes } from '../Contacts.interface';
import { getStrapiMedia } from '@/lib/media';
import Link from 'next/link';

const ContactCard: FC<{
  attributes: Attributes
}> = ({ attributes }) => {

  const [isOpen, setIsOpen] = useState(false)

  const url = getStrapiMedia(attributes.photo.data) || ''
  const cover = <Image src={url} alt='photo' width={340} height={340} style={{ objectFit: 'cover', objectPosition: 'top' }} />

  const validateTg = (link: string) => {
    if (link.includes('@')) {
      return `https://t.me/${link}`
    }
    if (link.includes('https://t.me')) {
      return link
    }

    return false
  }

  const tg = attributes?.telegram && validateTg(attributes?.telegram)

  console.log('tg', tg);


  const shareBtn = <Button type="primary" shape="circle" size='middle' className={style.shareBtn} icon={<ShareAltOutlined />} onClick={() => setIsOpen(prev => !prev)} />
  return (
    <Card
      bodyStyle={{ position: 'relative' }}
      cover={cover}
    >
      <Card.Meta
        title={attributes.name}
        description={attributes.position}
        avatar={attributes.withContacts && shareBtn}
      />
      {<div className={`${style.shareContent}`} style={{ width: '100%' }}>
        {tg && <Link href={tg}><Tg /></Link>}
        {attributes?.mail && <Link href={attributes?.mail}><Mail /></Link>}

      </div>
      }
    </Card>

  );
};

export default ContactCard;
