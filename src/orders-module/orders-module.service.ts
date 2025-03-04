import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class OrdersModuleService {
    private orders = []

    constructor(){
        // cargar los datos desde el archibo JSON
        try {
            const filePath = path.join(process.cwd(), 'src/Apis/orders.json');
            console.log('Loading orders data from:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf-8');

                if (!jsonData) {
                    throw new Error ('No data found in the file');
                }
               
            this.orders = JSON.parse(jsonData);
        }catch(error){
            console.error ('Error loading orders data:', error);
            this.orders = [];
        }
    }

    findAll(){
        return this.orders;
    }

    findOneById(id: number){
        return this.orders.find(order => Number (order) === Number (id));
    }
}
