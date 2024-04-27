import { Passenger } from "../Peoples/Passenger";
import { Ticket } from "./Ticket";
import { Gender } from "../Enums/Gender";
import { SeatType } from "../Enums/SeatType";

class bookingReference extends Ticket {
    private referenceNumber: string;
    private passenger: Passenger[] = [];
    constructor(
        firstName: string,
        lastName: string,
        hight: Number,
        weight: Number,
        gender: Gender,
        email: string,
        bookingReference: string,
        amountOfTicket: Number,
        seatType: SeatType[],
        referenceNumber: string,
        passenger: Passenger[]
    ) {
        super(firstName, lastName, hight, weight, gender, email, bookingReference, amountOfTicket, seatType);
        this.referenceNumber = referenceNumber;
        this.passenger = passenger;

    }
    getReferenceNumber() {

    }

}