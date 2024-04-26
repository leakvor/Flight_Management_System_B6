import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { Flight } from "../Flight/Flight";

export class Booking{
    private amountOfTicket:number
    private SeatType: SeatType;
    private MealTypes: MealType[];
    private flights:Flight[];
    constructor(amountOfTicket:number){
        this.amountOfTicket = amountOfTicket;
    }
    addSeat(SeatType:SeatType){
        this.SeatType
    }
    addMeal(meal:MealType):void{
        this.MealTypes.push(meal);
    }
    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
}