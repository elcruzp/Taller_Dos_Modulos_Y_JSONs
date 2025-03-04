import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ProductsModuleService {
    private products = []

    constructor(){
        // cargar los datos desde el archibo JSON
        try {
            const filePath = path.join(process.cwd(), 'src/Apis/products.json');
            console.log('Loading products data from:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf-8');

            if (!jsonData) {
                    throw new Error ('No data found in the file');
            }

            this.products = JSON.parse(jsonData);
        }catch(error){
            console.error ('Error loading products data:', error);
            this.products = [];
        }

    }

    findAll(){
        return this.products;
    }

    findOneById(id: number){
        return this.products.find(product => Number (product) === Number (id));
    }
}
