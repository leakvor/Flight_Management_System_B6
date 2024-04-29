import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
import { Flight } from "../Flight/Flight";
import { Date } from "../Address/Date";
export class Pilot extends Employee {
    private flights:Flight[]=[];
    constructor(firstName: string, lastName: string, hight: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, hight, weight, gender, salary, yearOfExperience);
    }
    addFlight(flight:Flight){
        this.flights.push(flight);
    }

    GetFlight(date:Date){
        // console.log(date);
        let count:number=0;
        const FlightOndate=this.flights.filter(flight=>{
            if(flight.getDepartureDateFlight()==date){
                count+=1
            }
        });
        return `You have ${count} flight`;
    }

}