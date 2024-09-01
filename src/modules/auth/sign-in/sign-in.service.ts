import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync } from 'bcrypt';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';

@Injectable()
export class SignInService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private _jwtService: JwtService,
  ) {}
  signIn = async (user: any) => {
    const isUser = await this.userModel.findOne({ email: user.email });
    if (!(isUser && compareSync(user.password, isUser.password)))
      throw new HttpException(
        'email or password wrong',
        HttpStatus.UNAUTHORIZED,
      );
    const token = this._jwtService.sign(
      {
        name: isUser.name,
        userId: isUser._id,
      },
      { secret: process.env.JWT_KEY },
    );
    return { message: 'success', token };
  };
}
