import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";

@Injectable()
export class CarsService {
    private cars:Card[] = [
        {
            id:uuid(),
            brand:'Toyota',
            model:'Corolla'
        },
        {
            id:uuid(),
            brand:'Mustang',
            model:'Camaro'
        },
        {
            id:uuid(),
            brand:'Lamborgini',
            model:'Aventador '
        }
    ];

    
    public getCars() {
        return this.cars;
    }
    
    public getCarById(id:string):Card {
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Card with id '${id}' is not found`);
        }
        return car;
    }

}
