import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync } from 'bcrypt';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';

@Injectable()
export class SignInService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  signIn = async (user: User) => {
    const isUser = await this.userModel.findOne({ email: user.email });
    if (!(isUser && compareSync(user.password, isUser.password)))
      throw new HttpException(
        'email or password wrong',
        HttpStatus.UNAUTHORIZED,
      );
    return { message: 'success', token: 'token' };
  };
}
