import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    
    //private cars = ['Toyota', 'Honda', 'Hyundai'] 
    constructor(
        private readonly carsService: CarsService
    ) {}
    //selec completo = selec * from tabla; trae todos los datos
    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }

    //selec * from tabla where id = id; traer el que necesito por id
    //@Param es para poder filtrar el dato que necesito
    @Get(':id')
    getCarById(@Param('id') id){
        console.log({id})
        return this.carsService.findById(+id)  //el (+) significa que reciba cual tipo de dato
    }
}
