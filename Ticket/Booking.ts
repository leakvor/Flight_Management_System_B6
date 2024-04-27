import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";
import { FlightType } from "../Enums/FlightType";

export class Booking {
    private amountOfTicket: number;
    private seatType: SeatType | null = null;
    private mealTypes: MealType[] = [];
    private flights: Flight[] = [];

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

    getDetails(): void {
        console.log(`Amount of Ticket: ${this.amountOfTicket}`);
        console.log(`Seat Type: ${this.seatType}`);
        console.log(`Meal Types: ${this.mealTypes.join(', ')}`);
        console.log(`Flights: ${this.flights.join(', ')}`);
    }
}
