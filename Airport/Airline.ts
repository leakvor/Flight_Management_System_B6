import { Aeroplane } from "./Areoplan";
export class Airline{
    private name:string;
    private aeroplanes:Aeroplane[]=[];

    constructor(name:string){
        this.name = name;
    }
    //======== Add aeroplane to airport===========
    addAeroplane(aeroplane:Aeroplane){
        this.aeroplanes.push(aeroplane)
    }
}