import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

type Data = {
  name?: string,
  error?: string,
  success?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const body = JSON.parse(req.body)

  const message = {
    to: process.env.MAIL_TO,
    subject: 'Обращение с сайта',
    text: `Обращение от: ${body.name || '-'};
    Контактный телефон: ${body.phone || '-'};
    Сообщение: ${body.message || '-'}
    `,
    html: `<div>
    <p>
      <b>Обращение от: </b>
      <span>${body.name || '-'}</span>
    </p>
    <p>
      <b>Контактный телефон: </b>
      <span>${body.phone || '-'}</span>
    </p>
    <p>
      <b>Сообщение: </b>
      <span>${body.message || '-'}</span>
    </p>
    </div>`,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // use TLS
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASS,
    },

  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err: any, info: any) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}. Error ${err}`,
            name: `info: ${info}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}
