export class Passenger {
    private email: string;
    private bookingReference: string;
    constructor (email: string, bookingReference: string){
        this.email = email;
        this.bookingReference = bookingReference;
    }
}
