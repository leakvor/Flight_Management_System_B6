import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Peoples/Passenger";


export class Booking {
    private amountOfTicket: number;
    private seatType: SeatType | null = null;
    private mealTypes: MealType[] = [];
    private flights: Flight[] = [];
    private passenger:Passenger | null=null;

    constructor(amountOfTicket: number) {
        this.amountOfTicket = amountOfTicket;
    }

    addSeat(seatType: SeatType): void {
        this.seatType = seatType;
    }

    addMeal(mealType: MealType): void {
        this.mealTypes.push(mealType);
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }
    addPassenger(passenger:Passenger){
        this.passenger=passenger
    }

    getAmountOfTicket(): number {
        return this.amountOfTicket;
    }

    getSeatType(): SeatType | null {
        return this.seatType;
    }

    getMealTypes(): MealType[] {
        return this.mealTypes;
    }

    getFlights(): Flight[] {
        return this.flights;
    }

    getPassenger(): Passenger | null { // Changed return type to Passenger | null
        return this.passenger;
    }
    getDetails(): void {
        console.log(`Amount of Ticket: ${this.amountOfTicket}`);
        console.log(`Seat Type: ${this.seatType}`);
        console.log(`Meal Types: ${this.mealTypes.join(', ')}`);
        console.log(`Flights: ${this.flights.join(', ')}`);
    }
}
