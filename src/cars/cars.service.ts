import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand:'Toyota',
            model:'Corolla'
        },
        {
            id:2,
            brand:'Mustang',
            model:'Camaro'
        },
        {
            id:3,
            brand:'Lamborgini',
            model:'Aventador '
        }
    ];

    
    public getCars() {
        return this.cars;
    }
    
    public getCarById(id:number) {
        return this.cars[id];
    }

}
