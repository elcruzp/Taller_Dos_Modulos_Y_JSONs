import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersModuleService {
    private users = []

    constructor (){
        // cargar los datos desde el archivo JSON
        try {
            const filePath = path.join(process.cwd(), 'src/Apis/users.json');
            console.log('Loading users data from:', filePath);

            const jsonData = fs.readFileSync(filePath, 'utf-8');

            if (!jsonData) {
                throw new Error ('No data found in the file');
            }

            this.users = JSON.parse(jsonData);
        }catch(error){
            console.error ('Error loading users data:', error);
            this.users = [];
        }
    }

    findAll (){
        return this.users;
    }

    findOneById(id: number){
        return this.users.find (user => Number (user) === Number (id));
    }
    

}

