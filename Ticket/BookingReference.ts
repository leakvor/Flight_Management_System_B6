import { Flight } from "../Flight/Flight";
import { MealType } from "../Enums/MealType";
import { Passenger } from "../Peoples/Passenger";
import { SeatType } from "../Enums/SeatType";
export class BookingReferenceNumber{
    passenger:Passenger;
    flights:Flight[];
    meals:MealType[];
    seat:SeatType
    constructor(passenger:Passenger,flights:Flight[],meals:MealType[],seat:SeatType){
        this.passenger = passenger;
        this.flights = flights;
        this.meals = meals;
        this.seat=seat
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

    getDetailInformation(): void {
        console.log(`Passengger: ${this.passenger}`);
        console.log(`Seat Type: ${this.seat}`);
        console.log(`Meal Types: ${this.meals.join(', ')}`);
        console.log(`Flights: ${this.flights.join(', ')}`);
    }
}