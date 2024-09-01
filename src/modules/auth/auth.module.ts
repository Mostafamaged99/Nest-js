import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { SignInService } from './sign-in/sign-in.service';
import { SignInController } from './sign-in/sign-in.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [SignupController, SignInController],
  providers: [SignupService, SignInService],
})
export class AuthModule {}
