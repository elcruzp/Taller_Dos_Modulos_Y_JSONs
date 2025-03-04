import { Module } from '@nestjs/common';
import { CategoriesModuleController } from './categories-module.controller';
import { CategoriesModuleService } from './categories-module.service';

@Module({
  controllers: [CategoriesModuleController],
  providers: [CategoriesModuleService]
})
export class CategoriesModuleModule {}
