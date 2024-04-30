import { Gender } from "../Enums/Gender";
import { Employee } from "./Employee";
import { BookingReferenceNumber } from "../Ticket/BookingReference";
import { Booking } from "../Ticket/Booking";
export class Manager extends Employee {
    private employees:Employee[]=[];
    private bookingRefernece:BookingReferenceNumber |null=null;
    constructor(
        firstName: string,
        lastName: string,
        height: number,
        weight: number,
        gender: Gender,
        salary: number,
        yearOfExperience: number
    ) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    //========== Get the total salary paid to all employees============
    getTotalSalaryPaid(): string {
        let totalSalary = 0;
        this.employees.forEach(employee => {  
            totalSalary += employee.getSalary(); 
        });
        return `I will pay ${totalSalary}$ for all employee.`;
    }


    //=============add BookingReference============
    addBookingReference(bookingReference: BookingReferenceNumber): void {
        this.bookingRefernece = bookingReference;
    }

    getNumberReturnTicket(): string {
        let count: number = 0;
        this.bookingRefernece?.getBooking().forEach(booking => {
            if (booking.getDepaturdate() !== null) {
                count++;
            }
        });
        if(count<2){
            return `The ticket that return is ${count} ticket.`;
        }else{
            return `The ticket that return are ${count} tickets.`;
        }
        
    }
}