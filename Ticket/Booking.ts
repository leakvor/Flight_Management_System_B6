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
    //==== Add seat======
    addSeat(seat: SeatType): void {
        this.seatTypes.push(seat);
    }
    // Add meal Type=========
    addMeal(mealType: MealType): void {
        this.mealTypes.push(mealType);
    }
    //=====Add flight=========
    addFlight(flight: Flight): void {
        this.flight=flight;
    }
    //========Add passenger========
    addPassenger(passenger:Passenger){
        this.passenger=passenger
    }
    ​//=====Add departure Date========
    addDepartureDate(date:Date){
        this.departureDate=date;
    }
    //=====Add return Date=======
    addReturnDate(date:Date){
        this.returnDate=date
    }
    //==== Add ticket after booking========
    addTicket(ticket:Ticket){
        this.tickects.push(ticket)
    }
    //=========Get booking Number=========
    getbookingNumber(): number {
        return this.bookingNumber;
    }
    //==== Gate seat type========
    getSeatType(): SeatType[] {
        return this.seatTypes;
    }
    //====get Mealtype=========
    getMealTypes(): MealType[] {
        return this.mealTypes;
    }
    //=======get Flight=========
    getFlight(){
        return this.flight;
    }
    //==== Get passenger========
    getPassenger(): Passenger | null { 
        return this.passenger;
    }
    //===== Get departure date========
    getDepaturdate():Date |null{
        return this.departureDate;
    }
    //========Get return date=========
    getReturndate(){
        return this.returnDate
    }
    //======Get deatail Information in booking========
    getDetails(): void {
        console.log(`Amount of Ticket: ${this.bookingNumber}`);
        console.log(`Seat Type: ${this.seatTypes}`);
        console.log(`Meal Types: ${this.mealTypes.join(', ')}`);
        console.log(`Flight: ${this.flight}`);
    }
}
