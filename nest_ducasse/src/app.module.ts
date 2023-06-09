import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EtapeModule } from './etape/etape.module';
import { IngredientToRecetteModule } from './ingredient-to-recette/ingredient-to-recette.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RangModule } from './rang/rang.module';
import { RecetteModule } from './recette/recette.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ducassecantine',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    RecetteModule,
    IngredientModule,
    EtapeModule,
    UserModule,
    RangModule,
    RestaurantModule,
    IngredientToRecetteModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
