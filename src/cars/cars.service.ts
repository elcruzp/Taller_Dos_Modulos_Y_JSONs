import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand:'Toyota',
            model:'corolla',
        },
        {
            id:2,
            brand:'Honda',
            model:'Civic',
        },
        {
            id:3,
            brand:'Hyundai',
            model:'Creta',
        }
    ]

        //este es un metodo que encapsula la
        //variable cars
        //un metodo porque esta dentro de la clase
        //si no esta en una clase es una funcion
    findAll(){
        return this.cars
    }

    findById(id:number){
        const car = this.cars.find(car => car.id === id)
        return car;
    }
}
