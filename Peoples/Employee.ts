import { Gender } from "../Enums/Gender";
import { Person } from "./Person";
export class Employee extends Person {
    protected salary: number;
    private yearOfExperience: number;
    constructor(firstName: string, lastName: string, height: Number, weight: Number,gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, height, weight,gender);
        this.salary = salary;
        this.yearOfExperience = yearOfExperience;
    }
    //======getSalary==============
    getSalary(){
        return this.salary
    }
}