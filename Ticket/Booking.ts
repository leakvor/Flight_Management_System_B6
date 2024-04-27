import { SeatType } from "../Enums/SeatType";
import { MealType } from "../Enums/MealType";
import { FlightType } from "../Enums/FlightType";
export class Booking{
    private amountOfTicket:number
    private SeatType: SeatType;
    MealTypes: MealType[];
    flights:FlightType[];
    constructor(amountOfTicket:number,SeatType:SeatType){
        this.amountOfTicket = amountOfTicket;
        this.SeatType = SeatType;
    }
    addMeal(meal:MealType):void{
        this.MealTypes.push(meal);
    }
    addFlight(flight:FlightType):void{
        this.flights.push(flight);
    }
}