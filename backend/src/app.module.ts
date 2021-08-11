import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PlayersModule } from './players/players.module';
import { ConfigModule } from '@nestjs/config';

import { Injectable, OnApplicationShutdown } from '@nestjs/common';
@Injectable()
class UsersService implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    const { exec } = require("child_process");
    exec("npm run save:db", (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
      }
      console.log(`stdout: ${stdout}`)
    })
    exec("rm -rf dist", (error: any, stdout: any, stderr: any) => {
  })
}
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    PlayersModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
