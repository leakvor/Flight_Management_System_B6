import { Passenger } from "../Peoples/Passenger";
import { Ticket } from "../Ticket/Ticket";
export class checkIn{
    private checkIn:number;
    private passport:string;
    private comfirm:boolean;
    private passenger:Passenger;
    private ticket:Ticket |null=null;
    constructor(checkIn:number,passport:string,comfirm:boolean,passenger:Passenger){
        this.checkIn=checkIn;
        this.passport=passport;
        this.comfirm=comfirm;
        this.passenger=passenger;
    }
    //======Add Ticket============
    addTickect(ticket:Ticket){
        this.ticket=ticket
    }
}

