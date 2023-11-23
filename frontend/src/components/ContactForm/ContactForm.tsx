import React from "react";
import style from "./ContactForm.module.scss";
import Image from "next/image";
import { Button, Checkbox, Col, Form, Grid, Input, Row, Upload, UploadProps, message, notification } from 'antd';

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

  const onFinish = async (values: any) => {
    const req = await fetch('/api/mail', {body: JSON.stringify(values), method: 'POST'}).then(req => req.json())

    if(req?.success) {
      notification.success({message: 'Обращение отправлено'})
      form.resetFields()
    } else if(req?.error){
      notification.error({message: 'Почтовый сервис временно не доступен'})
      console.error(req?.success)
    } else {
      console.error('Ошибка при отправке', req)
    }

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

          <Form.Item name="name" 
          rules={[
            {required: true, message: 'Введите имя'},
          ]}>
            <Input placeholder={t.name} size='large' />
          </Form.Item>

          <Form.Item 
            name="phone"  
            rules={[
              { pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, message: 'Некорректный номер телефона'},
              {required: true, message: 'Введите номер телефона'},
            ]}>
            <Input placeholder={t.tel} size='large' />
          </Form.Item>

          <Form.Item name="message" rules={[
            {required: true, message: 'Введите сообщение'},
          ]}>
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
        </div>

    </div >
  );
};

export default ContactForm;
