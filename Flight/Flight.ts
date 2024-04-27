import { FlightType } from "../Enums/FlightType";
import { Gate } from "../Airport/gate";
export class Flight {
    private gate: Gate | null = null;
    private flightTypes: FlightType[]; 
    

    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
        this.flightTypes = [FlightType.oneway,FlightType.roundtrip]; 
    }

    addGate(gate: Gate): void {
        this.gate = gate;
    }
}