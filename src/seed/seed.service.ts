import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsServices: CarsService,
    private readonly brandServices: BrandsService,
  ){ }

  public populateDB(){
    this.carsServices.fillCarsWithSeedData(CARS_SEED);
    this.brandServices.fillBrandsWithSeedData(BRANDS_SEED);
    return'Seed executed';
  }
}
