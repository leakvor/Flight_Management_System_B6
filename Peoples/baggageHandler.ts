import { Gender } from "../Enums/Gender";
import { Employee } from "./Employee";
import { Flight } from "../Flight/Flight";
export class baggaeHandler extends Employee {
    private flights:Flight[]=[];
    constructor(firstName: string, lastName: string, height: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }
    //=======Add flight==============
    addFlight(flight:Flight){
        this.flights.push(flight);
    }
    //===========Get Number of baggage of each fligh============
    getNumberOfBagsForFlight(flightNumber: string): number  {
        const foundFlight = this.flights.find(flight => flight.getFlightNumber() === flightNumber);
        return foundFlight ? foundFlight.getNumberOfBags() : 0;
    }
}