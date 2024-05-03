import { Gender } from "../Enums/Gender";
import { Employee } from "./Employee";
import { BookingReferenceNumber } from "../Ticket/BookingReference";
import { MealType } from "../Enums/MealType";
import { Booking } from "../Ticket/Booking";
import { Flight } from "../Flight/Flight";

export class Chef extends Employee {
    private bookingReference: BookingReferenceNumber | null = null;
    constructor(
        firstName: string,
        lastName: string,
        height: number,
        weight: number,
        gender: Gender,
        salary: number,
        yearOfExperience: number
    ) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }
    // ========================AddBookingReference==========================
    addBookingReference(bookingReference: BookingReferenceNumber): void {
        this.bookingReference = bookingReference;
    }

    //==========CountsMealTypeForFlight=============================
    CountsMealTypeForFlight(flight: Flight): string {
        const mealTypeCounts: Map<MealType, number> = new Map();
        if (this.bookingReference) {
            const bookingsForFlight = this.bookingReference.getBooking().filter(booking =>
                booking.getFlight() === flight
            );

            bookingsForFlight.forEach(booking => {
                const mealTypes = booking.getMealTypes();
                mealTypes.forEach(mealType => {
                    mealTypeCounts.set(mealType, (mealTypeCounts.get(mealType) || 0) + 1);
                });
            });
        }
        let result = `In Flight: ${flight.getFlightNumber()}\n`;
        result += `The type of meals that chef should prepare are:\n`;
        mealTypeCounts.forEach((count, mealType) => {
            result += `${mealType}: ${count}\n`;
        });
        return result;
    }
}




