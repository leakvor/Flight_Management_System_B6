import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
export class CoPilot extends Employee {
    constructor(firstName: string, lastName: string, height: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }
}
