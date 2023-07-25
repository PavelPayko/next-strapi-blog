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

const { useBreakpoint } = Grid;

const Page: React.FC<{
  vacancy: Vacancy
}> = ({ vacancy }) => {
  // const imageUrl = getStrapiMedia(article.attributes.image);

  console.log("vacancy", vacancy);

  const router = useRouter();
  const { vacancy: t } = router.locale === "ru" ? ru : en;

  const [form] = Form.useForm();

  const { xl, md } = useBreakpoint();

  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const col = xl ? 12 : 24

  return (
    <Layout>
      <section className={style.vacancyContainer}>
        <span>{vacancy.attributes.workType}</span>
        <div className={style.bar}>
          <h2>{vacancy.attributes.title}</h2>
          <Link href={'/vacancy'}>
            <Button size='large' type='primary' style={{ height: '74px', fontSize: '26px' }} className={style.downloadButton} >
              <ArrowLeftOutlined className={style.arrow} /> Вакансии
            </Button>
          </Link>
        </div>
        <div className={style.introduction}>
          {t.introduction.split('|').map((str, i) => {
            if (i === 1) return <span className={style.color}>{str}</span>
            return str
          })}
        </div>
        <div>
          {t.invite.replace('*vacancy*', vacancy.attributes.genitive)}
        </div>
        <div className={style.garants}>
          {t.garants}
        </div>
        <div className={style.responsibilities}>
          <h4>{t.responsibilities}:</h4>
          <ReactMarkdown>{vacancy.attributes.responsibilities}</ReactMarkdown>
        </div>
        <div className={style.requirements}>
          <h4>{t.requirements}:</h4>
          <ReactMarkdown>{vacancy.attributes.requirements}</ReactMarkdown>
        </div>
        <div>
          <h4>{t.conditions}:</h4>
          <ReactMarkdown>{vacancy.attributes.conditions}</ReactMarkdown>
        </div>

        <div className={style.form}>
          <Row gutter={20}>
            <Col span={col}>
              <Form
                form={form}
                // style={{ maxWidth: 600 }}
                className={style.form}
              >
                <span className={style.title}>{t.form.pageTitle}</span>
                <Form.Item >
                  <Input placeholder={t.form.name} size='large' />
                </Form.Item>

                <Form.Item >
                  <Input placeholder={t.form.tel} size='large' />
                </Form.Item>

                <Form.Item >
                  <Input placeholder={t.form.mail} size='large' />
                </Form.Item>

                <Form.Item >
                  <Input placeholder={t.form.portfolio} size='large' />
                </Form.Item>

                <Form.Item >
                  <Input.TextArea placeholder={t.form.message} size='large' autoSize={{ minRows: 4, maxRows: 4 }} />
                </Form.Item>

                <div className={style.buttons}>

                  <div className={'styled_upload'}>
                    <Upload {...props} >
                      <Button size='large' style={{ width: md ? '240px' : '100%', marginBottom: '20px' }} >
                        {t.form.uploadButton}
                      </Button>
                    </Upload>
                  </div>

                  <Button type='primary' htmlType='submit' size='large' className={style.send_button} >
                    {t.form.sendButton}
                  </Button>
                </div>
              </Form>
            </Col>
            {xl && <Col span={col}>

              <Image src={formBg} width={752} height={755} alt='bg' />
            </Col>}
          </Row>

          <Row gutter={20}>
            <Col span={col}>
            </Col>
          </Row>

          <Row gutter={20}>
            <Col span={md ? 12 : 24}>

            </Col>

          </Row>


        </div>

      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const vacanciesRes = await fetchAPI("/vacancies", { fields: ["slug"] });

  return {
    paths: vacanciesRes.data.map((vacancy: Vacancy) => ({
      params: {
        slug: vacancy.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const vacanciesRes = await fetchAPI("/vacancies", {
    filters: {
      slug: params.slug,
    },
    // populate: ["image", "category", "author.picture"],
  });
  // const categoriesRes = await fetchAPI("/categories");

  return {
    props: { vacancy: vacanciesRes.data[0] },
    revalidate: 1,
  };
}

export default Page;
