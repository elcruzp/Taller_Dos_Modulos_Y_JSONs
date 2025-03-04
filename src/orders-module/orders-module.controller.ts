import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { OrdersModuleService} from './orders-module.service';

@Controller('orders')
export class OrdersModuleController {

    constructor (
        private readonly orderService: OrdersModuleService
    ){}

    @Get()
    getAllOrders(){
        return this.orderService.findAll();
    }

    @Get(':id')
    getOrderById(@Param('id') id: string){
        return this.orderService.findOneById(+id);
    }
}
