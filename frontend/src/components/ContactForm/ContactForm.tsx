import React from "react";
import style from "./ContactForm.module.scss";
import Image from "next/image";
import { Button, Col, Form, Grid, Input, Row, Upload, UploadProps, message } from 'antd';

import Blot from '@/assets/images/blot.png'
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const { useBreakpoint } = Grid;

const ContactForm = ({ }) => {

  const [form] = Form.useForm();

  const { xl, md } = useBreakpoint();

  const router = useRouter();
  const t = router.locale === 'ru' ? ru : en;

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
    <div className={style.container} id='contact_us'>
      <Form
        form={form}
        // style={{ maxWidth: 600 }}
        className={style.form}
      >
        <PageTitle title={t.contactForm.pageTitle} />
        <Row gutter={20}>
          <Col span={col}>
            <Form.Item >
              <Input placeholder="Ваше имя" size='large' />
            </Form.Item>
          </Col>
          <Col span={col}>
            <Form.Item >
              <Input placeholder="Компания" size='large' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={col}>
            <Form.Item >
              <Input placeholder="Телефон" size='large' />
            </Form.Item>
            <Form.Item >
              <Input placeholder="Почта" size='large' />
            </Form.Item>
          </Col>
          <Col span={col}>
            <Form.Item >
              <Input.TextArea placeholder="Сообщение" size='large' autoSize={{ minRows: 4, maxRows: 4 }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={md ? 12 : 24}>
            <div className={'styled_upload'}>
              <Upload {...props} >
                <Button size='large' style={{ width: md ? '240px' : '100%', marginBottom: '20px' }} >Прикрепить файл</Button>
              </Upload>
            </div>

            <Button type='primary' htmlType='submit' size='large' style={{ width: md ? '240px' : '100%' }} >Отправить</Button>
          </Col>
          <Col span={12} className={style.end}>
            <Image src={Blot} alt='' width={185} className={style.blot} />
          </Col>
        </Row>



      </Form>
    </div >
  );
};

export default ContactForm;
