import { Gender } from "../Enums/Gender";
export abstract class Person {
    protected firstName: string;
    protected lastName: string;
    protected hight : Number;
    protected weight : Number;
    protected gender: Gender;
    constructor (firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hight = hight;
        this.weight = weight;
        this.gender = gender;
    }
}