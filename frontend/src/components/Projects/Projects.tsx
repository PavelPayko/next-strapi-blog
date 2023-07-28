import React from "react";
import style from "./Projects.module.scss";
import { List } from 'antd';
import ProjectCard from './ProjectCard/ProjectCard';
import PageTitle from '../PageTitle/PageTitle';
import { useRouter } from 'next/router';
import { data } from './mockdata';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'

const Projects = ({ }) => {

  const router = useRouter();
  const { projects: t } = router.locale === 'ru' ? ru : en;

  return (
    <section className={style.container} id="projects">
      <PageTitle title={t.pageTitle} className={style.title} />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        // grid={{ gutter: 8, column: 3 }}
        className={style.list}
        dataSource={t.cards.data}
        renderItem={(item) => (
          <List.Item className={style.card} >
            {/* <Card title={item.title}>Card content</Card> */}
            <ProjectCard title={item.title} desc={item.desc} cover={item.cover} />
          </List.Item>
        )}
      />

    </section >
  );
};

export default Projects;
