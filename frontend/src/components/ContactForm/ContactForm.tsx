import React from "react";
import style from "./ContactForm.module.scss";
import Image from "next/image";
import { Button, Checkbox, Col, Form, Grid, Input, Row, Upload, UploadProps, message } from 'antd';

import Blot from '@/assets/images/blot.png'
import PageTitle from '../PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';
import bg from '@/assets/images/form_bg.webp'

const { useBreakpoint } = Grid;

const ContactForm = ({ }) => {

  const [form] = Form.useForm();

  const { xl, md } = useBreakpoint();

  const router = useRouter();
  const { contactForm: t } = router.locale === 'ru' ? ru : en;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className={style.container} id='contact_us'>
      <Image src={bg} alt='background' className={style.bg} />
      <div className={style.filter}>
        <Form
          form={form}
          // style={{ maxWidth: 600 }}
          className={style.form}
          onFinish={onFinish}
        >
          <span className={style.title}>{t.pageTitle}</span>

          <Form.Item name="name">
            <Input placeholder={t.name} size='large' />
          </Form.Item>

          <Form.Item name="phone">
            <Input placeholder={t.tel} size='large' />
          </Form.Item>

          <Form.Item name="message">
            <Input.TextArea placeholder={t.message} size='large' autoSize={{ minRows: 4, maxRows: 4 }} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            className={style.aggrementItem}
            style={{ padding: '0 11px' }}
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error(t.required)),
              },
            ]}>
            <Checkbox className={style.aggrement}>{t.confirm.text} <a href="/legal/consent" target='_blank'>{t.confirm.link}</a></Checkbox>
          </Form.Item>

          <div className={style.buttons}>
            <Button type='primary' htmlType='submit' size='large' style={{ width: md ? '240px' : '100%' }} >
              {t.sendButton}
            </Button>
          </div>

        </Form>
        I</div>

    </div >
  );
};

export default ContactForm;
