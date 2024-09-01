import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from '../dto/Signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
  constructor(private _SignupService: SignupService) {}
  @Post()
  signup(@Body() body: SignupDto) {
    return this._SignupService.signup(body);
  }
}
