import { Employee } from "./Employee";
import { Gender } from "../Enums/Gender";
import { Flight } from "../Flight/Flight";
import { Date } from "../Address/Date";
export class Pilot extends Employee {
    private flights:Flight[]=[];
    constructor(firstName: string, lastName: string, height: Number, weight: Number, gender: Gender, salary: number, yearOfExperience: number) {
        super(firstName, lastName, height, weight, gender, salary, yearOfExperience);
    }
    //===========addFlight================
    addFlight(flight:Flight):void{
        this.flights.push(flight);
    }
    //==========Get Flight by date that each pilot will join============
    GetFlight(date: Date): string {
        let count: number = 0;
        const flightsOnDate: Flight[] = [];
    
        this.flights.forEach((flight) => {
            if (flight.getDepartureDateFlight() == date) {
                count += 1;
                flightsOnDate.push(flight);
            }
        });
    
        let result: string;
    
        if (count < 2) {
            result = `You have ${count} flight.`;
        } else {
            result = `You have ${count} flights.`;
        }
    
        flightsOnDate.forEach((flight, i) => {
            result += `\n${i + 1}. ${flight.getFlightNumber()}`;
        });
    
        return result;
    }
    
}