import { NestFactory } from '@nestjs/core';
// import { RateLimiterModule, RateLimiterGuard } from 'nestjs-rate-limiter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configure rate limiting
  // app.useGlobalGuards(new RateLimiterGuard());
  await app.listen(3000);
}
bootstrap();
