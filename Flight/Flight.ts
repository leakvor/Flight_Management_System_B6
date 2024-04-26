import { FlightType } from "../Enums/FlightType";
import { Gate } from "../Airport/gate";
export class Flight{
    private gates:Gate[]=[];
    constructor(private FlightNumber:string,private flightType:FlightType){}
    addGate(gate:Gate){
        this.gates.push(gate);
    }
}