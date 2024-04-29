import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
export class Controllers extends Employee {
    constructor(firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, hight, weight, gender, salary, yearOfExperience);
    }
}