import { Controller , Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsModuleService } from './products-module.service';

@Controller('products')
export class ProductsModuleController {

    constructor(
        private readonly productsService: ProductsModuleService
    ){}

    @Get()
    getAllProducts(){
        return this.productsService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id') id: string){
        return this.productsService.findOneById(+id);

}
}
