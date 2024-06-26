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
    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getHeight() {
        return this.height;
    }

    getWeight() {
        return this.weight;
    }

    getGender(): Gender {
        return this.gender;
    }
    
}