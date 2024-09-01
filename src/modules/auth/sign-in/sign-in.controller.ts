import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { SignInDto } from '../dto/SignIn.dto';

@Controller('sign-in')
export class SignInController {
  constructor(private _SignInService: SignInService) {}
  @Post()
  signIn(@Body() body: SignInDto) {
    return this._SignInService.signIn(body);
  }
}
