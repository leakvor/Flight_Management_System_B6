import { FlightType } from "../Enums/FlightType";
import { Gate } from "../Airport/gate";
import { FlightRoute } from "./FlightRoute";
import { FlightsCrew } from "../Peoples/FlightCrew";
import { CoPilot } from "../Peoples/CoPilot";
import { Chef } from "../Peoples/chef";
import { Pilot } from "../Peoples/Pilot";
import { FlightAttendent } from "../Peoples/FlightAttendent";
import { Passenger } from "../Peoples/Passenger";
import { Baggage } from "./Baggage";


export class Flight {
    private gate: Gate | null = null;
    private flight: FlightType |null =null ; 
    private flightRoute:FlightRoute |null=null;
    private flightAttendents:FlightAttendent[]=[];
    private Co_pilot:CoPilot |null=null;
    private pilot:Pilot |null=null;
    private chef?:Chef ;
    private passengers:Passenger[]=[];
    private numberOfBags: number = 0;

    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
    }
    //==== Add Gate===========
    addGate(gate: Gate): void {
        this.gate = gate;
    }
    //=====Add flightRoute========
    addFlightRoute(flightRoute:FlightRoute):void{
        this.flightRoute=flightRoute
    }
    //=====Add flightType========
    addFlightType(flight:FlightType):void{
        this.flight=flight;
    }
    //=====Add flightAttendent=======
    addFlightAttendent(flightAttendent:FlightAttendent):void{
        this.flightAttendents.push(flightAttendent);
    }
    //=========Add Co Pilot===========
    addCoPilot(Co_pilot:CoPilot):void{
        this.Co_pilot=Co_pilot;
    }
    //======Add Pilot=======
    addPilot(pilot:Pilot):void{
        this.pilot=pilot;
    }
    //=======Add chef=======
    addChef(chef:Chef):void{
        this.chef=chef;
    }
    //======Get flightNumber=======
    getFlightNumber():string{
        return this.flightNumber
    }
    //========Get Gate=======
    getGate(){
        return this.gate;
    }
    //=======Get DepartDate for flight========
    getDepartureDateFlight(){
        return this.flightRoute?.getDepartureDate()||null;
    }
    //========Add passenger to flight=========
    addPassenger(passenger:Passenger){
        this.passengers.push(passenger);
    }

    addBaggage(baggage: Baggage): void {
        this.passengers.forEach(passenger => {
            if (passenger.getBaggage().includes(baggage)) {
                this.numberOfBags++;
            }
        });
    }
    //=====Get the total number of bags for this flight========
    getNumberOfBags(): number {
        return this.numberOfBags;
    }
   
}