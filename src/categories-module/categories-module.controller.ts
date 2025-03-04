import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import {  CategoriesModuleService} from './categories-module.service';

@Controller('categories-module')
export class CategoriesModuleController {

    constructor (
        private readonly categoriesService: CategoriesModuleService
    ){}

    @Get()
    getAllCategories(){
        return this.categoriesService.findAll();
    }

    @Get(':id')
    getCategoryById(@Param('id') id: string){
        return this.categoriesService.findOneById(+id);
    }   
}
