import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
    const basicAuth = require('express-basic-auth');
    const app = await NestFactory.create(AppModule, {cors: true});
    app.use(
        ['/swagger-ui', '/docs-json'],
        basicAuth({
            challenge: true,
            users: {
                'admin': 'R&SLabs123'
            }
        })
    );
    
    app.useGlobalPipes(
        new ValidationPipe()
    )

    const options = new DocumentBuilder()
        .setTitle('Virtual Assistant 2.0')
        .setDescription('Documentação da API <br />' + 
                        'Develop: https://ads-stflabs-virtualassistant2-frontend-web.develop.stefanini.io <br />' + 
                        'Stage: https://ads-stflabs-virtualassistant2-frontend-web.stage.stefanini.io')
        .setVersion('3.0.2')
        .addBearerAuth({type: 'http', scheme: 'bearer', bearerFormat: 'Bearer'}, 'access-token')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger-ui', app, document);

    await app.listen(3000);
}

bootstrap();
