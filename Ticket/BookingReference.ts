import { Flight } from "../Flight/Flight";
import { MealType } from "../Enums/MealType";
import { Passenger } from "../Peoples/Passenger";
export class BookingReferenceNumber{
    passenger:Passenger;
    flights:Flight[];
    meals:MealType[];
    constructor(passenger:Passenger,flights:Flight[],meals:MealType[]){
        this.passenger = passenger;
        this.flights = flights;
        this.meals = meals;
    }

    addPassenger(passenger:Passenger){
        this.passenger
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    addMeal(meal:MealType){
        this.meals.push(meal);
    }
}