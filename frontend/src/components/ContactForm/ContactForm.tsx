import React from "react";
import style from "./ContactForm.module.scss";
import Image from "next/image";
import { Button, Checkbox, Col, Form, Grid, Input, Row, Upload, UploadProps, message } from 'antd';

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

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className={style.container} id='contact_us'>
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
            <Checkbox className={style.aggrement}>Я согласен(а) на <a href="/legal/consent" target='_blank'>обработку персональных данных</a></Checkbox>
          </Form.Item>

          <div className={style.buttons}>
            <Button type='primary' htmlType='submit' size='large' style={{ width: md ? '240px' : '100%' }} >
              {t.sendButton}
            </Button>
          </div>

        </Form>
      </div>

    </div >
  );
};

export default ContactForm;
