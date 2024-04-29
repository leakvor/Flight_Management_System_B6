import { Seat } from "./Seat"
export class Aeroplane{
    private  registrationNumber:string;
    private seats:Seat[]=[];
    constructor(registrationNumber:string){
        this.registrationNumber = registrationNumber;
    }
    addSeat(seat:Seat){
        this.seats.push(seat)
    }


}