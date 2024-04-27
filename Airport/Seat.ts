
import { SeatType } from "../Enums/SeatType";
import { Passenger } from "../Peoples/Passenger";

export class Seat{
   private type: SeatType
   private SeatNumber: string   
   private Passenger:Passenger
   constructor(type: SeatType,SeatNumber:string,Passenger:Passenger){
    this.type = type;
    this.SeatNumber = SeatNumber;
    this.Passenger = Passenger;
   }
   
}