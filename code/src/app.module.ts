import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DpModule } from './dp/dp.module';
import { PersonModule } from './person/person.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { PersonCourseModule } from './person_course/person_course.module';
import { PersonCertificationModule } from './person_certification/person_certification.module';
import { PersonLanguageModule } from './person_language/person_language.module';
import { PersonExperienceModule } from './person_experience/person_experience.module';
import { HistoricShowcaseModule } from './historic_showcase/historic_showcase.module';
import { NatcorpModule } from './natcorp/natcorp.module';
import { AccessModule } from './access/access.module';
import { HistoricInterestModule } from './historic_interest/historic_interest.module';
import { AccessCellModule } from './access_cell/access_cell.module';
import { CityModule } from './city/city.module';
import { BabelModule } from './babel/babel.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_SM,
            autoLoadEntities: true,
            //============================================================================
            synchronize: false // Não esquecer de colocar como FALSE antes de dar commit!!
            //============================================================================
        }),
        AccessCellModule,
        AccessModule,
        AuthModule,
        BabelModule,
        CityModule,
        DpModule,
        DropdownModule,
        HistoricInterestModule,
        HistoricShowcaseModule,
        NatcorpModule,
        PersonCertificationModule,
        PersonCourseModule,
        PersonExperienceModule,
        PersonLanguageModule,
        PersonModule,
        ShowcaseModule,
    ],
    providers:[]
})

export class AppModule {}
