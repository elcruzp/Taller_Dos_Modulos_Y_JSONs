import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { ProductsModuleModule } from './products-module/products-module.module';
import { CategoriesModuleModule } from './categories-module/categories-module.module';
import { UsersModuleModule } from './users-module/users-module.module';
import { OrdersModuleModule } from './orders-module/orders-module.module';


@Module({
  imports: [CarsModule, ProductsModuleModule, CategoriesModuleModule, UsersModuleModule, OrdersModuleModule],
  controllers: [],
  providers: [],
  exports: [],

})
export class AppModule {}
