import React from "react";
import Layout from "@/components/layout";
import PageTitle from '@/components/PageTitle/PageTitle';
import { ru } from '@/locales/ru'
import { en } from '@/locales/en'
import { useRouter } from 'next/router';

const Home = () => {

  const router = useRouter();
  const { privacy: t } = router.locale === 'ru' ? ru : en;

  return (
    <Layout>
      <section className='container' style={{ lineHeight: '1.5' }}>
        <h2>Политика конфиденциальности</h2>

        <p>
          Сайт использует файлы cookie, ip-адрес и сервисы сбора технических данных его посетителей,
          в целях формирования рекомендаций и сбора аналитической информации в обобщенном виде.
          С помощью данных инструментов мы можем лучше понять нужды и потребности пользователей и
          повысить уровень предоставляемых нами услуг и эффективность пользования нашим сайтом.
        </p>

        <a href="https://yandex.ru/legal/confidential/">Политика конфиденциальности сервисов Яндекс.</a>
        <p>
          Вы можете отказаться от использования файлов cookie, выбрав соответствующие настройки в браузере.
          Однако это может повлиять на работу некоторых функций сайта.
        </p>

        <p>
         Продолжая использовать данный ресурс, вы автоматически соглашаетесь на обработку данных с использованием данных технологий.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
