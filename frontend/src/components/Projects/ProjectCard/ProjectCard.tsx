import React, { useRef, useState } from "react";
import style from "./ProjectCard.module.scss";
import { Button, Card as AntCard, Typography } from 'antd';
import { ArrowRightOutlined, ArrowUpOutlined, CaretUpOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Meta } = AntCard;

const ProjectCard: React.FC<{
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
    </div>
  </div>

  return (
    <div
    // className={style.card}
    // onClick={() => setIsFlip(prev => !prev)}
    >
      <AntCard
        hoverable
        ref={cardRef}
        cover={coverEl}
        // onClick={() => setIsFlip(prev => !prev)}
        className={style.card}
      >
        <Meta
          title={<span className={style.titleWrp}>
            <span className={style.title}>{title}</span>
            <Link href={`projects/osint-razvedka`}>
              <Button
                type="primary"
                // shape="circle"
                // icon={<ArrowUpOutlined style={{ color: '#fff' }} />}
                // onClick={() => setIsFlip(prev => !prev)}
                // className={isFlip ? style.rotate : ""}
                className={style.btn}
                size='large'
              >
                Подробнее <ArrowRightOutlined className={style.arrow} />
              </Button>
            </Link>
          </span>}
          description={<div className={`${style.desc} ${isFlip ? style.height : ''}`}>{desc}</div>}
        // style={{ height: 0, padding: 0, position: 'absolute' }}
        />
      </AntCard>
    </div>
  );
};

export default ProjectCard;
