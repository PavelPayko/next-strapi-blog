import React from "react";
import style from "./Articles.module.scss";
import { List } from "antd";
import BlogCard from "../Blog/BlogCard/BlogCard";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className={style.container}>
      <List
        className={style.grid}
        grid={{
          gutter: 16,
          // xs: 1,
          // sm: 2,
          // md: 2,
          lg: 1,
          xl: 2,
          xxl: 3,
        }}
        dataSource={articles}
        renderItem={(article) => (
          <List.Item className={style.item}>
            <BlogCard
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Articles;
