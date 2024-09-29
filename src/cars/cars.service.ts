import { Injectable, NotFoundException } from '@nestjs/common';

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
        const car = this.cars.find(car => car.id === id);
        if (!car) {
            throw new NotFoundException(`Card with id '${id}' is not found`);
        }
        return car;
    }

}
