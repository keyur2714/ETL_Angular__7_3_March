export class LoggingService {

    constructor(){
        console.log("Logging Service Object Created...!");
    }

    logInfo(msg : string) : void {
        console.log("Info : "+new Date()+ " " +msg);
    }    
    logDebug(msg : string) : void {
        console.log("Debug : "+new Date()+ " " +msg);
    }
    logError(msg : string) : void {
        console.log("Error : "+new Date()+ " " +msg);
    }
}