import { Passenger } from "../Peoples/Passenger";
import { Gender } from "../Enums/Gender";
export class Booking extends Passenger {
    private amountOfTicket: Number;
    constructor(firstName: string,
        lastName: string,
        hight: Number,
        weight: Number,
        gender: Gender, email: string,
        bookingReference: string,
        amountOfTicket: Number
    ) {
        super(firstName, lastName, hight, weight, gender, email, bookingReference);
        this.amountOfTicket = amountOfTicket;
    }

}