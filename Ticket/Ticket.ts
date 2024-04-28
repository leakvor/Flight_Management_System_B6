import { Booking } from "./Booking";
import { Gender } from "../Enums/Gender";
import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Peoples/Passenger";
import { Date } from "../Address/Date";


export class Ticket extends Booking {
    private ticketNumber: string;
    private ticketStatus: boolean;

    constructor(
        amountOfTicket: number,
        ticketNumber: string,
        ticketStatus: boolean,
        seatType: SeatType,
        mealTypes: MealType[],
        flight: Flight,
        passenger: Passenger,
        departueDate:Date,
        returnDate:Date
    ) {
        super(amountOfTicket);
        this.ticketNumber = ticketNumber;
        this.ticketStatus = ticketStatus;
        this.addSeat(seatType);
        mealTypes.forEach((mealType) => this.addMeal(mealType)); 
        this.addFlight(flight); 
        this.addPassenger(passenger);
        this.addDepartureDate(departueDate);
        this.addReturnDate(returnDate);
    }

    getTicketNumber(): string {
        return this.ticketNumber;
    }

    getTicketStatus(): boolean {
        return this.ticketStatus;
    }

    getDetails(): void {
        super.getDetails(); 
        console.log(`Ticket Number: ${this.ticketNumber}`);
        console.log(`Ticket Status: ${this.ticketStatus}`);
    }
}