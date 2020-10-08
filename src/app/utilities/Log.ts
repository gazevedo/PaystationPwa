import { fstat } from 'fs';

export class Log{
    LOG_PATH: string = "D:/PaystationPwa/Log/"; 

    constructor(){ 
    }
     
    static Error(ex: string) {     
        console.log(ex);
    }

    static Info(ex: any) {     
        console.log(ex.message);
    }
 
    static Debugg(ex: any) {     
        console.log(ex.message);
    }
}