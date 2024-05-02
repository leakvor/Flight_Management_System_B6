import { Aeroplane } from "./Areoplan";
import { baggaeHandler } from "../Peoples/baggageHandler";
export class Airline{
    private name:string;
    private aeroplanes:Aeroplane[]=[];
    private baggageHandlers:baggaeHandler[]=[];

    constructor(name:string){
        this.name = name;
    }
    //======== Add aeroplane to airport===========
    addAeroplane(aeroplane:Aeroplane){
        this.aeroplanes.push(aeroplane)
    }
    //===Add baggageHandler to airline======
    addBaggageHnadler(baggageHandler:baggaeHandler){
        this.baggageHandlers.push(baggageHandler);
    }
}