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
        // this.bookingReference = bookingReference;
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

    getGate(flight: Flight): string {
        const booking = this.bookings.find(booking => booking.getFlight() === flight);
        if (booking) {
            const gate = flight.getGate();
            if (gate) {
                return `Your plane that waiting  at Gate ${gate.getGateNumber()}`;
            } else {
                return 'No gate';
            }
        } else {
            return 'No flight';
        }
    }
}


 