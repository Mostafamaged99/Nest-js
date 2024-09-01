import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:SOmg9KzSzbA5VT4z@cluster0.6hxjrrc.mongodb.net/notes',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
