import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "@/components/seo";
import Layout from "@/components/layout";

import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { ru } from "@/locales/ru";
import { en } from "@/locales/en";
import { useRouter } from "next/router";
import { Vacancy } from '.';
import style from './style.module.scss'
import { Button, Col, Form, Input, Row, Upload, UploadProps, message, Grid } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import formBg from '@/assets/images/sapiens-16.png'
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '@/_components/PageTitle/PageTitle';
import rehypeRaw from "rehype-raw";

const { useBreakpoint } = Grid;

interface Project {
  id: number,
  attributes: {
    "title": string,
    "short_description": string,
    "description": string,
    "createdAt": string,
    "updatedAt": string,
    "publishedAt": string,
    "slug": string
  }
}

const Page: React.FC<{
  project: Project
}> = ({ project }) => {
  // const imageUrl = getStrapiMedia(project.attributes.icon);

  console.log(project);

  return (
    <Layout>
      <section className={style.projectContainer}>
        <PageTitle title='Project card' />
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          // data-src={imageUrl}
          // data-srcset={imageUrl}
          data-uk-img
        >
          <h1>{project.attributes.title}</h1>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            -content-
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
            >project.attributes.description</ReactMarkdown>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div className="uk-width-expand">
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">
                    {project.attributes.publishedAt}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: projectsRes.data.map((project: any) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const projectsRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    // populate: ["image", "category", "author.picture"],
  });
  // const categoriesRes = await fetchAPI("/categories");

  return {
    props: { project: projectsRes.data[0] },
    revalidate: 1,
  };
}

export default Page;
