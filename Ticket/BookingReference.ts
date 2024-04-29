import { Flight } from "../Flight/Flight";
import { MealType } from "../Enums/MealType";
import { Passenger } from "../Peoples/Passenger";
import { SeatType } from "../Enums/SeatType";
import { Booking } from "./Booking";

export class BookingReferenceNumber {
    private booking: Booking;

    constructor(booking: Booking) {
        this.booking = booking;
    }

    getBookingDetails(): void {
        const amountOfTicket = this.booking.getAmountOfTicket();
        const seatType = this.booking.getSeatType();
        const mealTypes = this.booking.getMealTypes();
        const flights = this.booking.getFlights();
        const passenger = this.booking.getPassenger();

        console.log(`Amount of Ticket: ${amountOfTicket}`);
        console.log(`Seat Type: ${seatType}`);
        console.log(`Meal Types: ${mealTypes.join(', ')}`);
        console.log(`Flights: ${flights.join(', ')}`);
        console.log(`Passenger: ${passenger || 'Unknown'}`);
    }
}