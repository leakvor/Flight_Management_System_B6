import { Passenger } from "../Peoples/Passenger";
export class checkIn{
    private checkIn:number;
    private passport:string;
    private comfirm:boolean;
    private passenger:Passenger;
    constructor(checkIn:number,passport:string,comfirm:boolean,passenger:Passenger){
        this.checkIn=checkIn;
        this.passport=passport;
        this.comfirm=comfirm;
        this.passenger=passenger;
    }
}

