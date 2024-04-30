import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
import { BookingReferenceNumber } from "../Ticket/BookingReference";
import { Passenger } from "./Passenger";

export class Controllers extends Employee {
    private bookingReference: BookingReferenceNumber | null = null;
    BookingReferenceNumber: any;
    constructor(firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, hight, weight, gender, salary, yearOfExperience);
    }
    addBookingReference(bookingReference: BookingReferenceNumber):void{
        this.bookingReference=bookingReference;
    }
    CountpassengerOfflight(flightNumber: number): void{
        const passengers: Passenger[] = this.BookingReferenceNumber.getBooking().getPassengers();
        const passengerCount: number = passengers.length;
        
        
    } 
    }

