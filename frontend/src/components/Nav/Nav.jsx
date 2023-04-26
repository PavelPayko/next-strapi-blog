import React from "react";
import Link from "next/link";
import style from "./Nav.module.css";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className={style.container} data-uk-navbar>
        <div className={style.left}>
          <div className="logo">
            <Link href={`/`}>
              <img
                className="logo-main scale-with-grid "
                src="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                data-retina="https://kvando.tech/wp-content/uploads/2021/08/K-1.png"
                data-height="1500"
                alt="K"
                data-no-retina=""
                width={200}
              />
            </Link>
          </div>
        </div>
        <div className={style.right}>
          <ul className={style.nav}>
            {categories?.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    href={`/blog/category/${category.attributes.slug}`}
                    legacyBehavior
                    className={style.menu_item}
                  >
                    {category.attributes.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
