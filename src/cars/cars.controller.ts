import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';


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
    public getCarById(@Param('id') id:string) {
        console.log({id:id});
        return this.carServices.getCarById(id);
    }

    @Post()
    public createCard(@Body() body:any){
        return body
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
