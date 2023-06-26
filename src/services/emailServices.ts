import { transport } from '@/config/nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

export const sendEmailResetPassword = async (
  idUser: number,
  email: string,
  token: string
): Promise<SMTPTransport.SentMessageInfo> => {
  try {
    const responseMessage = await transport.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: 'CAMBIA TU CONTRASEÑA',
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Restablece tu contraseña</title>
        <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
          }
      
          html {
            font-family: sans-serif;
          }
      
          .container {
            width: 90%;
            max-width: 600px;
            margin: 30px auto 0;
            border: 1px solid #ccc;
            padding: 10px 20px;
            border-radius: 8px;
          }
      
          .title-welcome {
            font-size: 20px;
            color: #171717;
            font-weight: 800;
          }
      
          .title-welcome span {
            color: #1d4ed8;
          }
      
          .reset-password-message {
            color: #3f3f46;
            font-size: 16px;
            line-height: 23px;
            margin-bottom: 30px;
          }
      
          .reset-password-message span {
            color: #1d4ed8;
            text-decoration: underline;
          }
      
          .reset-password-button {
            border: none;
            outline: none;
            padding: 8px 16px;
            background-color: #1d4ed8;
            color: #ffffff;
            cursor: pointer;
            transition: .3s ease;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
          }
      
          .reset-password-button:hover {
            background-color: #1e3a8a;
          }
          .reset-password-not-acction {
            font-size: 14px;
            margin-top: 30px;
            margin-bottom: 20px;
            color: #52525b;
          }
      
          .reset-password-error {
            border-top: 1px solid #ccc;
            padding-top: 8px;
            font-size: 14px;
            color: #52525b;
            line-height: 18px;
          }
          .reset-password-error .reset-password-link {
            color: #1d4ed8;
          }
        </style>
      </head>
      
      <body>
        <div class="container">
          <h1 class="title-welcome">Hola
            <span>ferreteriajr267@gmail.com</span>
      
          </h1>
          <p class="reset-password-message">
            Hola, se solicitó un restablecimiento de contraseña para tu cuenta
            <span>${email}</span>, haz click en el botón que aparece a continuación para cambiar tu
            contraseña.
          </p>
          <a class="reset-password-button" href='${
            process.env.APP_BASE_URL as string
          }/restablecer-contrasena?token=${token}&user=${idUser}'>CAMBIAR CONTRASEÑA</a>
      
          <p class="reset-password-not-acction">Si tú no realizaste la solicitud de cambio de contraseña, solo ignora este
            mensage</p>
          <p class="reset-password-error">
            Si tienes problemas dando click al boton "CAMBIAR CONTRASEÑA" copia y pega el siguiente enlace en tu navegador
            <span class="reset-password-link">${
              process.env.APP_BASE_URL as string
            }/restablecer-contrasena?token=${token}&user=${idUser}</span>
          </p>
        </div>
      </body>
      </html>`
    })
    if (
      responseMessage.messageId === undefined ||
      responseMessage.messageId === null
    ) {
      throw new Error('No se pudo enviar el correo')
    }

    return responseMessage
  } catch (error) {
    throw new Error('No se pudo enviar el correo')
  }
}
