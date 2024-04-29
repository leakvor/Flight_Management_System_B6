import { FlightType } from "../Enums/FlightType";
import { Gate } from "../Airport/gate";
import { FlightRoute } from "./FlightRoute";
export class Flight {
    private gate: Gate | null = null;
    private flight: FlightType |null =null ; 
    private flightRoute:FlightRoute |null=null;
    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
    }

    addGate(gate: Gate): void {
        this.gate = gate;
    }
    addFlightRoute(flightRoute:FlightRoute){
        this.flightRoute=flightRoute
    }
    addFlightType(flight:FlightType){
        this.flight=flight;
    }
    getFlightNumber(){
        return this.flightNumber
    }
    
    getGate(){
        return this.gate;
    }
}