import { Booking } from "./Booking";
import { Gender } from "../Enums/Gender";
import { SeatType } from "../Enums/SeatType";

export class Ticket extends Booking {
    private seatType: SeatType[] = [];
    constructor(
        firstName: string,
        lastName: string,
        hight: Number,
        weight: Number,
        gender: Gender,
        email: string,
        bookingReference: string,
        amountOfTicket: Number,
        seatType: SeatType[]
    ) {
        super(firstName, lastName, hight, weight, gender, email, bookingReference, amountOfTicket);
        this.seatType = seatType;
    }
    getFareBasis() {
        
    }
    getSeatType() {

    }
}
