import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";
import { Passenger } from "../Peoples/Passenger";
import { Date } from "../Address/Date";
import { Ticket } from "./Ticket";


export class Booking {
    private bookingNumber: number;
    private seatTypes: SeatType[]=[];
    private mealTypes: MealType[] = [];
    private flight: Flight |null=null;
    private passenger:Passenger | null=null;
    private departureDate:Date | null=null;
    private returnDate?:Date;
    private tickects:Ticket[]=[];

    constructor(bookingNumber: number) {
        this.bookingNumber = bookingNumber;
    }

    addSeat(seat: SeatType): void {
        this.seatTypes.push(seat);
    }

    addMeal(mealType: MealType): void {
        this.mealTypes.push(mealType);
    }

    addFlight(flight: Flight): void {
        this.flight=flight;
    }
    addPassenger(passenger:Passenger){
        this.passenger=passenger
    }
    ​
    addDepartureDate(date:Date){
        this.departureDate=date;
    }
    addReturnDate(date:Date){
        this.returnDate=date
    }
    addTicket(ticket:Ticket){
        this.tickects.push(ticket)
    }
    getbookingNumber(): number {
        return this.bookingNumber;
    }

    getSeatType(): SeatType[] {
        return this.seatTypes;
    }

    getMealTypes(): MealType[] {
        return this.mealTypes;
    }

    getFlight(){
        return this.flight;
    }
   

    getPassenger(): Passenger | null { 
        return this.passenger;
    }
    getDepaturdate():Date |null{
        return this.departureDate;
    }
    getReturndate(){
        return this.returnDate
    }
    getDetails(): void {
        console.log(`Amount of Ticket: ${this.bookingNumber}`);
        console.log(`Seat Type: ${this.seatTypes}`);
        console.log(`Meal Types: ${this.mealTypes.join(', ')}`);
        console.log(`Flight: ${this.flight}`);
    }
}
