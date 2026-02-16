import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDoc = new DocumentBuilder()
  .setTitle("Proyecto M4")
  .setDescription("Proyecto individual")
  .addBearerAuth()
  .build();

  const swaggerModule = SwaggerModule.createDocument(app, swaggerDoc);

  SwaggerModule.setup("docs", app, swaggerModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
