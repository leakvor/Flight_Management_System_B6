export class Baggage{
    private codeId:string[] = [];
    private weights:number
    constructor(codeId:string[],weights:number){
        this.codeId=codeId;
        this.weights=weights;
    }
    
    getTag(){
        return this.codeId;
      
    }

}