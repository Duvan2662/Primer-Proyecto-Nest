import { Card } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Card[] = [
    {
        id: uuid(),
        brand:'Toyota',
        model:'Corolla'
    },
    {
        id: uuid(),
        brand:'Honda',
        model:'Civic'
    },
    {
        id: uuid(),
        brand:'Jeep',
        model:'Cheroqui'
    },

]