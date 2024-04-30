import { Flight } from "../Flight/Flight";
import { MealType } from "../Enums/MealType";
import { SeatType } from "../Enums/SeatType";
import { Booking } from "./Booking";

export class BookingReferenceNumber {
    private bookings: Booking[]=[];

    constructor() {
        
    }
    addBooking(booking:Booking){
        this.bookings.push(booking)
    }
    getBookingInformation(): void {
        this.bookings.forEach((booking, index) => {
            console.log(`Booking ${index + 1} Details:`);
            console.log(`Amount of Ticket: ${booking.getbookingNumber}`);
            console.log(`Seat Type: ${booking.getSeatType()}`);
            console.log(`Meal Types: ${booking.getMealTypes().join(', ')}`);
            console.log(`Flight: ${booking.getFlight()}`);
            console.log(`Departure Date: ${booking.getDepaturdate()}`);
            console.log(`Return Date: ${booking.getReturndate()}`);
            console.log('------------------------');
        });
    }
    getBooking():Booking[]{
        return this.bookings
    }
}


