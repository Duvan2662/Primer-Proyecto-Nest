import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';


@Controller('cars')
export class CarsController {

    constructor(
        private readonly carServices:CarsService
    ){

    }

    @Get()
    public getAllCars(){
        return this.carServices.getCars();
    }

    
    @Get(':id')
    public getCarById(@Param('id',ParseUUIDPipe) id:string) {
        console.log({id:id});
        return this.carServices.getCarById(id);
    }

    @Post()
    public createCard(@Body() createCardDto:CreateCarDto){
        return createCardDto
    }

    @Patch(':id')
    public updateCard(
        @Param('id',ParseIntPipe) id:number,
        @Body() body:any
    ){
        return body
    }

    @Delete(':id')
    public deleteCard(@Param('id',ParseIntPipe) id:number){
        return {
            methot: 'delete',
            id:id,
        }
    }
}
