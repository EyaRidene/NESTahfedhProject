import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailingService {
  private transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'eya.ridene21@gmail.com',
        pass: 'drzhprctbuetleyp',
      },
    });
  }

  async sendPasswordEmail(email: string, password: string): Promise<void> {
    await this.transporter.sendMail({
      from: 'eya.ridene21@gmail.com',
      to: email,
      subject: 'Password Recovery',
      text: `Your new password is: ${password}`,
      html: '<p>Your new password is: ${password}</p>',
    });
  }

  async sendWelcomeEmail(email: string) {
    await this.transporter.sendMail({
      from: 'eya.ridene21@gmail.com',
      to: email,
      subject: 'Welcome to Our NESTa7fedh App!',
      text: 'Thank you for signing up. Welcome to our application!',
      html: `<td class="esd-stripe" align="center">
    <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: transparent;">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-m-p10b es-m-p20r es-m-p20l" align="left">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="es-m-p0r es-m-p20b esd-container-frame" width="600" valign="top" align="center">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text es-m-txt-c">
                                                    <h1 style="color: #e91b16;">Welcome to&nbsp;<strong>NESTahfedh</strong></h1>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="esd-structure es-p30b es-m-p20r es-m-p20l" align="left">
                    <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                            <tr>
                                <td width="600" class="esd-container-frame" align="center" valign="top">
                                    <table cellpadding="0" cellspacing="0" width="100%" style="border-radius: 10px; border-collapse: separate;">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p15t es-p15b" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #ffffff; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" class="esd-block-text es-p20b es-p30r es-p30l">
                                                    <h2 style="color: #333333; line-height: 120%;">Your&nbsp;account has been successfully created. <br></h2>
                                                    <h2 style="color: #333333; line-height: 120%;">Sign in to your account to start shopping !</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-button es-p20b">
                                                    <!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
\t<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:235px" arcsize="0%" stroke="f"  fillcolor="#0b5394">
\t\t<w:anchorlock></w:anchorlock>
\t\t<center style='color:#ffffff; font-family:Barlow, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Sign in to your account</center>
\t</v:roundrect></a>
<![endif]-->
                                                    <!--[if !mso]><!-- --><span class="es-button-border msohide"><a href="https://viewstripo.email" class="es-button" target="_blank">Sign in to your account</a></span>
                                                    <!--<![endif]-->
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-spacer es-p15b" style="font-size:0">
                                                    <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid #ffffff; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</td>`,
    });
  }
}
