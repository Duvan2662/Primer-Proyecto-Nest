import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly carServices:CarsService
    ){

    }

    @Get()
    public getAllCars(){
        return this.carServices.getCars;
    }

    
    @Get(':id')
    public getCarById(@Param('id',ParseIntPipe) id:number) {
        console.log({id:id});
        return this.carServices.getCarById(id);
    }
}
