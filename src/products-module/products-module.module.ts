import { Module } from '@nestjs/common';
import { ProductsModuleController } from './products-module.controller';
import { ProductsModuleService } from './products-module.service';

@Module({
  controllers: [ProductsModuleController],
  providers: [ProductsModuleService]
})
export class ProductsModuleModule {}
