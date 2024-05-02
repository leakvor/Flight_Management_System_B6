import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
import { BookingReferenceNumber } from "../Ticket/BookingReference";
import { Booking } from "../Ticket/Booking";
import { Flight } from "../Flight/Flight";
import { Passenger } from "./Passenger";
import { FrequenFlyer } from "../Ticket/FrequentFlyer";
export class Controllers extends Employee {
    private bookingReference:BookingReferenceNumber |null=null;BookingReferenceNumber: any;
;
    constructor(firstName: string, lastName: string, height: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }

    //=======get detail information of passenger from each flight============
    addBookingReference(bookingReference:BookingReferenceNumber){
        this.bookingReference=bookingReference;
    }
    
    //==============Get all Information of each Passenger=================
    getDetailInformation(bookingNumber: number) {
        if (this.bookingReference) {
            const bookings = this.bookingReference.getBooking();
            const booking = bookings.find(booking => booking.getbookingNumber() === bookingNumber);
            if (booking) {
                const passenger: Passenger | null = booking.getPassenger();
                if (passenger?.getAddress() && passenger.getFrequanflyer()) {
                return (`Booking Number: ${bookingNumber} has Passenger:(Name: ${passenger.getFirstName()} ${passenger.getLastName()},Height: ${passenger.getHeight()}, Weight: ${passenger.getWeight()}, Baggage: ${passenger.getBaggage()}, Email: ${passenger.getEmail()}, Address: ${passenger.getAddress()}, Frequanflyer: ${passenger.getFrequanflyer()}) `);
                } else if(passenger?.getAddress()) {
                    return (`Booking Number: ${bookingNumber} has Passenger:(Name: ${passenger.getFirstName()} ${passenger.getLastName()},Height: ${passenger.getHeight()}, Weight: ${passenger.getWeight()}, Baggage: ${passenger.getBaggage()}, Email: ${passenger.getEmail()}, Address: ${passenger.getAddress()}) `);
                }else if(passenger?.getFrequanflyer()){
                    return (`Booking Number: ${bookingNumber} has Passenger:(Name: ${passenger.getFirstName()} ${passenger.getLastName()},Height: ${passenger.getHeight()}, Weight: ${passenger.getWeight()}, Baggage: ${passenger.getBaggage()}, Email: ${passenger.getEmail()}, Frequanflyer: ${passenger.getFrequanflyer()}) `);
                }else if(passenger){
                    return (`Booking Number: ${bookingNumber} has Passenger:(Name: ${passenger.getFirstName()} ${passenger.getLastName()},Height: ${passenger.getHeight()}, Weight: ${passenger.getWeight()}, Baggage: ${passenger.getBaggage()}, Email: ${passenger.getEmail()} `);
                }
            } 
        }
    }
    CountpassengerOfflight(flightNumber: number): void{
        const passengers: Passenger[] = this.BookingReferenceNumber.getBooking().getPassengers();
        const passengerCount: number = passengers.length;
        
        
    } 
    }

