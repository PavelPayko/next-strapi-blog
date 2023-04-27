import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./Header.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const Header = ({ }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const moveHandler = (e: any) => {
    const x = -(window.innerWidth / 2 - e?.pageX) / 30;
    const y = (window.innerHeight / 2 - e?.pageY) / 10;
    if (imgRef.current) {
      imgRef.current.style.transform = `perspective(20000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
    }
  };

  const arrowHandler = () => {
    scrollTo(0, window.innerHeight)
  }


  return (
    <header className={style.header}>
      <div className={style.nav}>
        <div className="logo">
          <a
            id="logo"
            href="https://kvando.tech/ru"
            title="Qualitative software development"
            data-height="60"
            data-padding="10"
          >
            <img
              className="logo-main scale-with-grid "
              src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
              data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
              data-height="1500"
              alt="K"
              data-no-retina=""
              width={200}
            />
          </a>
        </div>
        <nav id="menu" className={style.menu}>
          <ul
            id="menu-%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b5-%d0%bc%d0%b5%d0%bd%d1%8e-%d1%80%d1%83"
            className={style.menu}
          >
            <li
              id="menu-item-215"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"
            >
              <a href="#about" data-hash="#about">
                <span>О нас</span>
              </a>
            </li>
            <li
              id="menu-item-216"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"
            >
              <a href="#services" data-hash="#services">
                <span>Сервисы</span>
              </a>
            </li>
            <li
              id="menu-item-486"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"
            >
              <a href="#kvando_team" data-hash="#kvando_team">
                <span>Команда Kvando</span>
              </a>
            </li>
            <li
              id="menu-item-218"
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home"
            >
              <a href="#contact" data-hash="#contact">
                <span>Контакты</span>
              </a>
            </li>
            <li
              id="menu-item-491"
              className="menu-item menu-item-type-post_type menu-item-object-page"
            >
              <a href="https://kvando.tech/ru/vacancies/">
                <span>Наши вакансии</span>
              </a>
            </li>
            <li id="menu-item-703" className={style.menu_item}>
              <Link href="/blog" legacyBehavior>
                {/* <a href="https://kvando.tech/ru/blog/"> */}
                <span>Блог</span>
                {/* </a> */}
                {/* <a>Strapi Blog</a> */}
              </Link>
            </li>
          </ul>
          <a className="responsive-menu-toggle " href="#">
            <i className="icon-menu-fine"></i>
          </a>{" "}
        </nav>
      </div>
      <div className={style.container + " " + style.radius}>
        <div className={style.content}>
          <div className={style.left}>
            <h2>Что-то о крутой компании </h2>
            <p>Какая-то очень полезная информация. И еще больше очень полезной информации. Целая гора очень полезной информации</p>
          </div>
          <div className={style.right}>
            <div className={`${style.squares} ${style.col}`}>
              <div
                className={`${style.img_fluid} ${style.img} ${style.img_1} ${style.set_abs}`}
              ></div>
              <div
                className={`${style.img_fluid} ${style.img} ${style.img_2} ${style.set_abs}`}
              ></div>
            </div>
            <div className={`${style.theme} ${style.col_auto}"`}>
              <Image
                ref={imgRef}
                src={Theme}
                alt="Picture of the author"
                width="500"
                // height="300px"
                className={`${style.inline}`}
                style={{
                  willChange: "transform",
                  transition: "all 3000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;",
                  transform:
                    "perspective(20000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);",
                }}
                onMouseMove={moveHandler}
              />
            </div>
          </div>
        </div>

        <div className={style.arrow_wrp} onClick={arrowHandler}>
          <svg className={style.arrow}>
            <polygon className={style.arrow_top} points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
            <polygon className={style.arrow_middle} points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
            <polygon className={style.arrow_bottom} points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
          </svg>
        </div>
        <div className={style.main}>


        </div>
        <div className={style.decor}>
          <div className={`${style.animation_circle_inverse} ${style.col_auto}`}>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>




      </div>
    </header>
  );
};

export default Header;
