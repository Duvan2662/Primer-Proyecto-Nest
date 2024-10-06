import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars:Card[] = [
        // {
        //     id:uuid(),
        //     brand:'Toyota',
        //     model:'Corolla'
        // },
        
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

    
    public createCard(createCarDto:CreateCarDto):Card {
        const car:Card = {
            id:uuid(),
            brand:createCarDto.brand,
            model:createCarDto.model,
        }
        this.cars.push(car);
        return car;
    }

    public updateCard(id:string, updateCarDto:UpdateCarDto) {
        
        let carDB = this.getCarById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB;
            }
            return car;
        })
        
        return carDB;
    }

    
    public deleteCard(id:string) {
        let carDb = this.getCarById(id);
        this.cars = this.cars.filter(car => car.id !== carDb.id);
    }

    public fillCarsWithSeedData(cars:Card[]){
        this.cars = cars;
    }

}
