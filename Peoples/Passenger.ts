import { Person } from "./Person";
import { Gender } from "../Enums/Gender";
import { Address } from "../Address/Address";
import { Flight } from "../Flight/Flight";
import { Gate } from "../Airport/gate";
import { Booking } from "../Ticket/Booking";
import { Baggage } from "../Flight/Baggage";
export class Passenger extends Person{
    private email: string;
    private address?:Address;
    private bookings:Booking[]=[];
    private baggages:Baggage[]=[];
    
    // private bookingReference: string;
    constructor (firstName: string, lastName: string, height: Number, weight: Number, gender: Gender,email: string){
        super(firstName, lastName, height, weight, gender);
        this.email = email;
    }
    //========Address============
    addAddress(address:Address){
        this.address
    }

    //===========get FirstName================
    getFirstName(){
        return this.firstName;
    }
    //===========get LastName================
    getLastName(){
        return this.lastName;
    }
    //===========get Email================
    getEmail(){
        return this.email;
    }
    //===========get Gender================
    getGender(){
        return this.gender
    }
    //===========get Address================
    getAddress(){
        return this.address
    }
   
    //======Add booking==========
    addBooking(booking:Booking):void{
        this.bookings.push(booking);
    }
    // =========Add baggage=======
    addBaggage(Baggage:Baggage):void{
        this.baggages.push(Baggage);   
    }
    //====== Get Gate from filght that passenger waiting for=========
    getGate(flight: Flight) {
        const booking = this.bookings.find(booking => booking.getFlight() === flight);
        if (booking) {
            const gate = flight.getGate();
            if (gate) {
                return gate.getGateNumber();
            }
        }
    }
    //=====Get Baggage==========
    getBaggage(): Baggage[] {
        return this.baggages;
    }
}


 