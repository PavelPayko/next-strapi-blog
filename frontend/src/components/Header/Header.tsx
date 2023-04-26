import React, { useRef, useState } from "react";
import Link from "next/link";
import style from "./Header.module.css";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";

const Header = ({ }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const moveHandler = (e: any) => {
    const x = -(window.innerWidth / 2 - e?.pageX) / 30;
    const y = (window.innerHeight / 2 - e?.pageY) / 10;
    if (imgRef.current) {
      imgRef.current.style.transform = `perspective(20000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
    }
  };


  return (
    <header className="app1 loding-header nav-abs custom-scroll ">
      <div className={style.container + " " + style.radius}>
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
              {/* <img
                  className="logo-sticky scale-with-grid "
                  src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-height="1500"
                  alt="K"
                  data-no-retina=""
                />
                <img
                  className="logo-mobile scale-with-grid "
                  src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-height="1500"
                  alt="K"
                  data-no-retina=""
                />
                <img
                  className="logo-mobile-sticky scale-with-grid "
                  src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                  data-height="1500"
                  alt="K"
                  data-no-retina=""
                /> */}
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
              {/* <li
                id="menu-item-219"
                className="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children submenu last"
              >
                <a href="#pll_switcher">
                  <span>Русский</span>
                </a>
                <ul className="sub-menu">
                  <li
                    id="menu-item-219-ru"
                    className="lang-item lang-item-9 lang-item-ru current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom current_page_item menu-item-home"
                  >
                    <a href="https://kvando.tech/ru/">
                      <span>Русский</span>
                    </a>
                  </li>
                  <li
                    id="menu-item-219-en"
                    className="lang-item lang-item-7 lang-item-en menu-item menu-item-type-custom menu-item-object-custom last-item"
                  >
                    <a href="https://kvando.tech/">
                      <span>English</span>
                    </a>
                  </li>
                </ul>
                <span className="menu-toggle"></span>
              </li> */}
            </ul>
            <a className="responsive-menu-toggle " href="#">
              <i className="icon-menu-fine"></i>
            </a>{" "}
          </nav>
        </div>

        {/* <div className="search_wrapper">
          <form method="get" id="searchform" action="https://kvando.tech/ru/">
            <i className="icon_search icon-search-fine"></i>
            <a href="#" className="icon_close">
              <i className="icon-cancel-fine"></i>
            </a>

            <input
              type="text"
              className="field"
              name="s"
              placeholder="Enter your search"
            />
            <input type="submit" className="display-none" value="" />
          </form>
        </div> */}

        <div className={`${style.animation_circle_inverse} ${style.col_auto}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
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
        <div className={style.radius}></div>
      </div>
    </header>
  );
};

export default Header;
