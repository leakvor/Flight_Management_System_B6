import { Airport } from "../Airport/Airport";
import { Date } from "../Address/Date";

export class FlightRoute{
    private departureAirport:Airport |null=null;
    private arrivateAirport:Airport |null=null;
    private departureDate:Date |null=null;
    private arrivalDate:Date |null=null;
    constructor(private routeId:string){
        this.routeId=routeId;
    }
    addDepartureAirport(departureAirport:Airport){
        this.departureAirport=departureAirport;
    }
    addArrivalAirport(arrivalAirport:Airport){
        this.arrivateAirport=arrivalAirport;
    }
    addDepartureDate(departureDate:Date){
        this.departureDate=departureDate;
    }
    addArrivalDate(arrivalDate:Date){
        this.arrivalDate=arrivalDate;
    }
   
    
}