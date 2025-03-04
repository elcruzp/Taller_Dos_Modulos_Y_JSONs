import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CategoriesModuleService {
    private categories =[]

    constructor(){
        // cargar los datos desde el archibo JSON
        try {
            const filePath = path.join(process.cwd(), 'src/Apis/products.json');
            console.log('Loading products data from:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf-8');

                if (!jsonData) {
                    throw new Error ('No data found in the file');
                }
               
            this.categories = JSON.parse(jsonData);
        }catch(error){
            console.error ('Error loading products data:', error);
            this.categories = [];
        }
    } 

    findAll(){
        return this.categories;
    }

    findOneById(id: number){
        return this.categories.find(category => Number (category) === Number (id));
    }

    
}
