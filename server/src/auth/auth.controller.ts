import { Controller, Post, Body, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from './auth-jwt.guard';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MailingService } from '../mailing/mailing.service';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private mailService: MailingService,
  ) {}

  @Post('login')
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: 'login user and return token',
    type: String,
  })
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 200,
    description: 'register user and return token',
    type: String,
  })
  async register(@Body() createUserDto: CreateUserDto) {
    const token = await this.authService.register(createUserDto);
    await this.mailService.sendWelcomeEmail(createUserDto.email);
  }

  @UseGuards(AuthGuard)
  @Get('check')
  async checkAuth(@Req() req) {
    return await this.authService.checkAuth(req.user);
  }
}
