import { Module } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { JhersonInformationController } from '@/jherson-information/jherson-information.controller';


@Module({
  imports: [],
  controllers: [JhersonInformationController],
  providers: [AppService]
})

export class AppModule { }
