import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsModuleService } from './products-module.service';

@Controller('products')
export class ProductsModuleController {

    constructor(
        private readonly productService: ProductsModuleService
    ){}

    @Get()
    getAllProducts(){
        return this.productService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id')id:string){
        return this.productService.findOneById(+id);
}
}
