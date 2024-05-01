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
   //========= Add Address to airport==========
   addAddress(address:Address):void{
    this.airportAddress=address;
   }
   //======= Add airline to==========
   addAirline(airline:Airline):void{
    this.airlines.push(airline)
   }
   //===========Add Gate=======
   addGate(gate:Gate):void{
    this.gates.push(gate);
   }
   //=====Get Name=========
   getName(){
     return this.name;
   }
   //========Get Code=======
   getCode(){
     return this.code;
   }

}