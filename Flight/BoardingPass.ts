import { Booking } from "../Ticket/Booking";
import { Ticket } from "../Ticket/Ticket";
import { Seat } from "../Airport/Seat";
import { Date } from "../Address/Date";
import { checkIn } from "./checkIn";

export class BoardingPass {
    private ticket: Ticket;
    private boardingTime: Date |null=null;
    private checkIn:checkIn |null=null;

    constructor(ticket: Ticket, boardingTime: Date,checkIn:checkIn) {
        this.ticket = ticket;
        this.boardingTime = boardingTime;
        this.checkIn=checkIn;
    }
    //===== Generate Boarding Pass from ticket information======
    generateBoardingPass(): string {
        return `
            Boarding Pass
            Ticket Number: ${this.ticket.getTicketNumber()}
            Ticket Status: ${this.ticket.getTicketStatus()}
            Amount of Ticket: ${this.ticket.getAmountOfTicket()}
            Seat Type: ${this.ticket.getSeatType()}
            Meal Types: ${this.ticket.getMealTypes().join(', ')}
            Flight: ${this.ticket.getFlight()}
            Passenger: ${this.ticket.getPassenger()}
            Departure Date: ${this.ticket.getDepartureDate()}
            Return Date: ${this.ticket.getReturnDate()}
            checkIn: ${this.checkIn}
            Boarding Time: ${this.boardingTime}
        `;
    }
}