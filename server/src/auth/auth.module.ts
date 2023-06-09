import {forwardRef, Module} from '@nestjs/common';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {MailingService} from "../mailing/mailing.service";



@Module({
    imports: [
        forwardRef(() => UserModule),
        JwtModule.register({
            secret: jwtConstants.secret || 'SecretKey',
            signOptions: { expiresIn: '24h' },
        }),
    ],
    providers: [
        AuthService, MailingService,
    ],
    controllers: [
        AuthController,
    ],
    exports: [
        AuthService,
        JwtModule,
    ]
})

export class AuthModule {}