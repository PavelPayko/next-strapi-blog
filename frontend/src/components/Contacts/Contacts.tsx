import React, { FC } from "react";
import style from "./Contacts.module.scss";
// import Image from "next/image";
import { List } from 'antd';
import { Employee } from './Contacts.interface';
import { getStrapiMedia } from '@/lib/media';
import ContactCard from './Card/ContactCard';
import PageTitle from '../PageTitle/PageTitle';

const Contacts: FC<{
  contacts?: Employee[]
}> = ({ contacts = [] }) => {
  const data = [] as Employee[]

  for (let i = 0; i <= 3; i++) {
    contacts.forEach(item => data.push(item))
  }

  return (
    <section className={style.container} id="kvando_team">
      <PageTitle title='Contacts' />
      <div className={style.grid}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={(item, i) => {
            const photo = {
              data: item.attributes.photo.data[0]
            }
            const url = getStrapiMedia(photo) || ''
            return (
              <List.Item key={i}>
                <ContactCard name={item.attributes.name} desc={item.attributes.stack} url={url} />
              </List.Item>
            )
          }}
        />
      </div>

    </section >
  );
};

export default Contacts;
