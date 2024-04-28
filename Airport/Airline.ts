import { Aeroplane } from "./Areoplan";
export class Airline{
    private name:string;
    private aeroplanes:Aeroplane[]=[];

    constructor(name:string){
        this.name = name;
    }
    addAeroplane(aeroplane:Aeroplane){
        this.aeroplanes.push(aeroplane)
    }
}