import React, { useRef, useState } from "react";
import style from "./StyledCard.module.scss";
import { Button, Card as AntCard, Typography } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

const { Meta } = AntCard;

const StyledCard: React.FC<{
  title: string,
  desc?: string,
  cover?: JSX.Element
}> = ({ title, desc, cover }) => {

  const [isFlip, setIsFlip] = useState(true)
  const cardRef = useRef(null as any)
  const coverEl = <div
    className={`${style.cover} ${!isFlip ? style.height : ''}`}
    style={{ display: 'flex' }}
  >
    <div className={style.icon} >
      {cover}
      <div className={style.circles}>
        <div className={style.circle_one}></div>
        <div className={style.circle_two}></div>
      </div>
    </div>
  </div>

  return (
    <div className={style.card}
    >
      <AntCard
        hoverable
        ref={cardRef}
        cover={coverEl}
        onClick={() => setIsFlip(prev => !prev)}
      >
        <Meta
          title={<span className={style.title}>
            {title}
            <Button
              type="primary"
              shape="circle"
              icon={<CaretUpOutlined />}
              // onClick={() => setIsFlip(prev => !prev)}
              className={isFlip ? style.rotate : ""}
            />
          </span>}
          description={<div className={`${style.desc} ${isFlip ? style.height : ''}`}>{desc}</div>}
        />
      </AntCard>
    </div>
  );
};

export default StyledCard;
