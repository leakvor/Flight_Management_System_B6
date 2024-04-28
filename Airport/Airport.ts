import { Address } from "../Address/Address";
import { Airline } from "./Airline";
import { Gate } from "./gate";
export class Airport{
   private code:string;
   private name:string;
   private airportAddress:Address |null=null;
   private airlines:Airline[]=[];
   private gates:Gate[]=[];
   constructor(code:string, name:string){
     this.code = code;
     this.name = name;
   }
   addAddress(address:Address){
    this.airportAddress=address;
   }
   addAirline(airline:Airline){
    this.airlines.push(airline)
   }
   addGate(gate:Gate){
    this.gates.push(gate);
   }
   getName(){
     return this.name;
   }
   getCode(){
     return this.code;
   }


}