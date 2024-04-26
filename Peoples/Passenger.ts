import { Person } from "./Person";
import { Gender } from "../Enums/Gender";
import { Address } from "../Address/Address";
export class Passenger extends Person{
    private email: string;
    private address?:Address;
    // private bookingReference: string;
    constructor (firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender,email: string){
        super(firstName, lastName, hight, weight, gender);
        this.email = email;
        // this.bookingReference = bookingReference;
    }
    addAddress(address:Address){
        this.address
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getGender(){
        return this.gender
    }
    // getAddress(){
    //     return this.address
    // }
}
