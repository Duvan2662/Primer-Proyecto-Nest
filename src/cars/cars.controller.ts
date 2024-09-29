import { Controller, Get, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {

    private cars = ['Toyota','Honda','Jeep'];

    @Get()
    public getAllCars(){
        return this.cars;
    }

    
    @Get(':id')
    public getCarById(@Param('id') id:string) {
        let car = this.cars[+id]
        console.log({id:car});

        return {
            car
        }
    }
}
