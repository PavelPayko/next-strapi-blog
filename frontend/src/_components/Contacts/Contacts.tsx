import React, { FC } from "react";
import style from "./Contacts.module.scss";
import { List } from 'antd';
import { Employee } from './Contacts.interface';
import { getStrapiMedia } from '@/lib/media';
import ContactCard from './ContactCard/ContactCard';
import PageTitle from '../PageTitle/PageTitle';
import { useRouter } from 'next/router';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'

const Contacts: FC<{
  contacts?: Employee[]
}> = ({ contacts = [] }) => {

  const router = useRouter();
  const { contacts: t } = router.locale === 'ru' ? ru : en;

  // const data = [] as Employee[]

  // for (let i = 0; i <= 3; i++) {
  //   contacts.forEach(item => data.push(item))
  // }

  return (
    <section className={style.container} id="contacts">
      <PageTitle title={t.pageTitle} />
      <div className={style.grid}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4,
          }}
          dataSource={contacts}
          renderItem={(contact, i) => {

            const url = getStrapiMedia(contact.attributes.photo.data) || ''
            return (
              <List.Item key={i}>
                <ContactCard attributes={contact.attributes} key={contact.id} />
              </List.Item>
            )
          }}
        />
      </div>

    </section >
  );
};

export default Contacts;
