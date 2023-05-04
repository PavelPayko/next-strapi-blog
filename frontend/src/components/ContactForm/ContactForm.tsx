import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import style from "./ContactForm.module.scss";
import Theme from "@/assets/images/theme.png";
import Image from "next/image";
import { Button, Card, Col, Form, Input, Menu, MenuProps, Row, Tabs, Upload, UploadProps, message } from 'antd';
import { ArrowDownOutlined, UploadOutlined } from '@ant-design/icons';
import Bg from '@/components/Bg'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import Blot from '@/assets/images/blot.png'

const ContactForm = ({ }) => {

  const [form] = Form.useForm();


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

  return (
    <div className={style.container}>
      <Form
        form={form}
        // style={{ maxWidth: 600 }}
        className={style.form}
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item >
              <Input placeholder="input placeholder" size='large' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item >
              <Input placeholder="input placeholder" size='large' />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={12}>
            <Form.Item >
              <Input placeholder="input placeholder" size='large' />
            </Form.Item>
            <Form.Item >
              <Input placeholder="input placeholder" size='large' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item >
              <Input.TextArea placeholder="input placeholder" size='large' autoSize={{ minRows: 4, maxRows: 4 }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={12}>
            <Upload {...props}>
              <Button size='large' style={{ width: '240px', marginBottom: '20px' }} >Прикрепить файл</Button>
            </Upload>

            <Button type='primary' htmlType='submit' size='large' style={{ width: '240px' }} >Отправить</Button>
          </Col>
          <Col span={12} className={style.end}>
            <Image src={Blot} alt='' width={185} />
          </Col>
        </Row>



      </Form>
    </div >
  );
};

export default ContactForm;
