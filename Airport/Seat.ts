
import { SeatType } from "../Enums/SeatType";
import { Passenger } from "../Peoples/Passenger";

export class Seat{
   private type: SeatType;
   private SeatNumber: string;  
   private Passenger:Passenger |null=null;
   constructor(type: SeatType,SeatNumber:string){
    this.type = type;
    this.SeatNumber = SeatNumber;
   }
   addPassenger(passenger:Passenger){
      this.Passenger=passenger
   }
   
}