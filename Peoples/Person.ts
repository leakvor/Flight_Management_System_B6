import { Gender } from "../Enums/Gender";
export abstract class Person {
    protected firstName: string;
    protected lastName: string;
    protected height : Number;
    protected weight : Number;
    protected gender: Gender;
    constructor (firstName: string, lastName: string, height: Number, weight: Number, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
    }
}