import { Module } from '@nestjs/common';
import { OrdersModuleController } from './orders-module.controller';
import { OrdersModuleService } from './orders-module.service';

@Module({
  controllers: [OrdersModuleController],
  providers: [OrdersModuleService]
})
export class OrdersModuleModule {}
