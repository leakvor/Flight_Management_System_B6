import { Person } from "./Person";
import { Gender } from "../Enums/Gender";
export class Passenger extends Person{
    private email: string;
    
    // private bookingReference: string;
    constructor (firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender,email: string){
        super(firstName, lastName, hight, weight, gender);
        this.email = email;
        // this.bookingReference = bookingReference;
    }
}
