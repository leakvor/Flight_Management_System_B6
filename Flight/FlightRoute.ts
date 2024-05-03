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
    //=====Add departureDate=======
    addDepartureAirport(departureAirport:Airport){
        this.departureAirport=departureAirport;
    }
    //=========Add ArrivalDate============
    addArrivalAirport(arrivalAirport:Airport){
        this.arrivateAirport=arrivalAirport;
    }
    //===========Add DepartueDate============
    addDepartureDate(departureDate:Date){
        this.departureDate=departureDate;
    }
    //===========Add Arrival Date==========
    addArrivalDate(arrivalDate:Date){
        this.arrivalDate=arrivalDate;
    }
    //=========get Departure Date===========
    getDepartureDate(){
     return this.departureDate
   } 
}