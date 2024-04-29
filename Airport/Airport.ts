class Airport{
   private code:string
   private name:string
   constructor(code:string, name:string){
     this.code = code;
     this.name = name;
   }
   getName(){
     return this.name;
   }
   getCode(){
     return this.code;
   }

}