export class Baggage{
    private codeId:string;
    private weights:number
    constructor(codeId:string,weights:number){
        this.codeId=codeId;
        this.weights=weights;
    }
    
    //===========get codeID===========
    getCodeId():string{
        return this.codeId
    }
    //=======get Weight=======
    getWeight():number{
        return this.weights
    }
}