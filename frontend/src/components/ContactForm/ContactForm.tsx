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
  const { contactForm: t } = router.locale === 'ru' ? ru : en;

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
        <span className={style.title}>{t.pageTitle}</span>
        <Row gutter={20}>
          <Col span={col} className={style.formRow}>
            <Form.Item >
              <Input placeholder={t.name} size='large' />
            </Form.Item>

            {/* <Form.Item >
              <Input placeholder={t.company} size='large' />
            </Form.Item> */}

            <Form.Item >
              <Input placeholder={t.tel} size='large' />
            </Form.Item>

            {/* <Form.Item >
              <Input placeholder={t.mail} size='large' />
            </Form.Item> */}

            <Form.Item >
              <Input.TextArea placeholder={t.message} size='large' autoSize={{ minRows: 4, maxRows: 4 }} />
            </Form.Item>

            <div className={style.buttons}>
              <Button type='primary' htmlType='submit' size='large' style={{ width: md ? '240px' : '100%' }} >
                {t.sendButton}
              </Button>

              {/* <div className={'styled_upload'}>
                <Upload {...props} >
                  <Button size='large' style={{ width: md ? '240px' : '100%', marginBottom: '20px' }} >
                    {t.uploadButton}
                  </Button>
                </Upload>
              </div> */}
            </div>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={col}>

          </Col>
          <Col span={col}>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={md ? 12 : 24}>

          </Col>

        </Row>
      </Form>
    </div >
  );
};

export default ContactForm;
