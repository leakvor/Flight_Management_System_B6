import { FlightType } from "../Enums/FlightType";
import { Gate } from "../Airport/gate";
import { FlightRoute } from "./FlightRoute";
export class Flight {
    private gate: Gate | null = null;
    private flightTypes: FlightType[]; 
    private flightRoute:FlightRoute |null=null;
    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
        this.flightTypes = [FlightType.oneway,FlightType.roundtrip]; 
    }

    addGate(gate: Gate): void {
        this.gate = gate;
    }
    addFlightRoute(flightRoute:FlightRoute){
        this.flightRoute=flightRoute
    }
}