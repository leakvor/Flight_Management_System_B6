import { Booking } from "./Booking";
import { Ticket } from "./Ticket";
import { Seat } from "../Airport/Seat";
import { Date } from "../Address/Date";
import { Gate } from "../Airport/gate";



export class BoardingPass {
    private ticket: Ticket;
    private boardingGate: Gate;
    private boardingTime: Date |null=null;
    private seatNumber: Seat |null=null;

    constructor(ticket: Ticket, boardingGate: Gate, boardingTime: Date, seatNumber: Seat) {
        this.ticket = ticket;
        this.boardingGate = boardingGate;
        this.boardingTime = boardingTime;
        this.seatNumber = seatNumber;
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
            Boarding Gate: ${this.boardingGate}
            Boarding Time: ${this.boardingTime}
            Seat Number: ${this.seatNumber}
        `;
    }
}