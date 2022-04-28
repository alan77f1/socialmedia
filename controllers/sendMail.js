const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendEmail = (to, url, txt) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });


  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: 'UTC2 News',
    html: `
            <div style="max-width: 700px; margin:auto; border: 15px solid #F9CB00; padding: 50px 20px; border-radius:25px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color:#281756;">Chào mừng đến với UTC2 News.</h2>
            <p >Xin chào mừng! Bạn đến với UTC2 News. 

            </p>

            <p>
               Để xác thực địa chỉ email của bạn. 
            </p>

            <p>
            Chỉ cần nhấp vào nút bên dưới
         </p>
    
            <a href=${url} style="background:#281756; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; border-radius:10px; display: inline-block;">${txt}</a>
        
         
            </div>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
