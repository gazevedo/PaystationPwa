export class Result{
    status:number;
    message:string;
        
    constructor(msg:string){
        this.status = 417;
        this.message = msg;
    }
}