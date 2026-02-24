import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
dotenv.config();

const PORT = Number(process.env.PORT) ?? 5000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3001', 'https://jhersonaguto.web.app'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS Portfolio Backend')
    .setDescription('Learn NestJS')
    .setVersion('0.1')
    .addTag('userInfo')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(PORT);
  console.log(`Server running: http://127.0.0.1:${PORT}`);
}
bootstrap();
