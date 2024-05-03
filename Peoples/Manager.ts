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

    //========= Add Employee===========
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    //========== Get the total salary paid to all employees============
    getTotalSalaryPaid(): number {
        let totalSalary = 0;
        this.employees.forEach(employee => {  
            totalSalary += employee.getSalary(); 
        });
        return totalSalary;
    }

    //=============add BookingReference============
    addBookingReference(bookingReference: BookingReferenceNumber): void {
        this.bookingRefernece = bookingReference;
    }

    // ======== Get Number that has return ticket===========
    getNumberReturnTicket(): number {
        let count: number = 0;
        this.bookingRefernece?.getBooking().forEach(booking => {
            if (booking.getDepaturdate() !== null) {
                count++;
            }
        });
        return count
    }
}