import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UsersModuleService } from './users-module.service';

@Controller('users')
export class UsersModuleController {

    constructor(
        private readonly userService: UsersModuleService
    ){}

    @Get()
    getAllUsers(){
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id')id:string){
        return this.userService.findOneById(+id);
    }
    
}
