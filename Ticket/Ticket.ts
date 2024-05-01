import { Booking } from "./Booking";
import { Gender } from "../Enums/Gender";
import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Peoples/Passenger";
import { Date } from "../Address/Date";


export class Ticket {
    private ticketNumber: string;
    private ticketStatus: boolean;
    private amountOfTicket: number;
    private seatType: SeatType;
    private mealTypes: MealType[];
    private flight: Flight;
    private passenger: Passenger;
    private departureDate: Date;
    private returnDate: Date;

    constructor(
        amountOfTicket: number,
        ticketNumber: string,
        ticketStatus: boolean,
        seatType: SeatType,
        mealTypes: MealType[],
        flight: Flight,
        passenger: Passenger,
        departureDate: Date,
        returnDate: Date
    ) {
        this.amountOfTicket = amountOfTicket;
        this.ticketNumber = ticketNumber;
        this.ticketStatus = ticketStatus;
        this.seatType = seatType;
        this.mealTypes = mealTypes;
        this.flight = flight;
        this.passenger = passenger;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
    }
    //===========get ticket Number==========
    getTicketNumber(): string {
        return this.ticketNumber;
    }
    // ===== get Ticket Status=======
    getTicketStatus(): boolean {
        return this.ticketStatus;
    }
    //===  get Amount Of Ticket=======
    getAmountOfTicket(): number {
        return this.amountOfTicket;
    }
    //===========get Seat Type=============
    getSeatType(): SeatType {
        return this.seatType;
    }
    //==============get Meal Types============
    getMealTypes(): MealType[] {
        return this.mealTypes;
    }
    //=============get Flight=================
    getFlight(): Flight {
        return this.flight;
    }
    //==========get Passenger============
    getPassenger(): Passenger {
        return this.passenger;
    }
    //==========get Departure Date==============
    getDepartureDate(): Date {
        return this.departureDate;
    }
    //============get Return Date=============
    getReturnDate(): Date {
        return this.returnDate;
    }
}
