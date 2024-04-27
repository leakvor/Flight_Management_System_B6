import { Booking } from "./Booking";
import { Gender } from "../Enums/Gender";
class BoardingPass extends Booking {
    private referencesNumber: string;
    constructor(firstName: string,
        lastName: string,
        hight: Number,
        weight: Number,
        gender: Gender,
        email: string,
        bookingReference: string,
        amountOfTicket: Number,
        referencesNumber: string
    ) {
        super(firstName, lastName, hight, weight, gender, email, bookingReference, amountOfTicket);
        this.referencesNumber = referencesNumber;
    }
}