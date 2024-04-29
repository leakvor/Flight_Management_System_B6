import { Gender } from "../Enums/Gender";
import { Employee } from "./Employee";


export class Manager extends Employee {
    private employees:Employee[]=[]
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

    // Get the total salary paid to all employees
    getTotalSalaryPaid(): number {
        let totalSalary = 0;
        this.employees.forEach(employee => {
            console.log(employee.getSalary());
            
            totalSalary += employee.getSalary(); 
        });

        return totalSalary;
    }

}