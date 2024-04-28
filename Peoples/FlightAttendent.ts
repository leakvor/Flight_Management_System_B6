import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
export class FlightsCrew extends Employee {
    private flightsCrew: string;
    constructor(firstName: string, lastName: string, hight: Number, weight: Number,gender: Gender, salary: number, yearOfExperience: number,flightsCrew:string){
        super(firstName, lastName, hight, weight,gender, salary, yearOfExperience);
        this.flightsCrew = flightsCrew;
    }
}