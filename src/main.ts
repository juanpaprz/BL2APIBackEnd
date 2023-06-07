import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = '0.0.0.0';
const PORT = 5432;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, HOST).then(() => {
    // tslint:disable-next-line:no-console
    console.log(
      `** Nest Live Development Server is listening on ${HOST}:${PORT}, open your browser on http://localhost:${PORT}/ **`,
    );
  });
}
bootstrap();
