import React, { FC, useRef, useState } from "react";
import style from "./ContactCard.module.scss";
import { Typography, Carousel, Tabs, Switch, Card, List, Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import Tg from '@/assets/svg/Tg'
import Mail from '@/assets/svg/Mail'
import Image from 'next/image';

const ContactCard: FC<{
  name: string,
  url: string,
  desc: string
}> = ({ name, desc, url }) => {
  const [isOpen, setIsOpen] = useState(false)

  const cover = <Image src={url} alt='photo' width={340} height={340} style={{ objectFit: 'cover' }} />

  return (

    <Card
      bodyStyle={{ position: 'relative' }}
      cover={cover}
    >
      <Card.Meta
        title={name}
        description={desc}
        avatar={<Button type="primary" shape="circle" size='middle' className={style.shareBtn} icon={<ShareAltOutlined />} onClick={() => setIsOpen(prev => !prev)} />}
      />
      {isOpen && <div className={`${style.shareContent}`}>
        <Tg />
        <Mail />
      </div>
      }
    </Card>

  );
};

export default ContactCard;
