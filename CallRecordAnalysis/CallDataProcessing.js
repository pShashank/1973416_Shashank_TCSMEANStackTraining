let obj = require("mongoose");
let fs = require("fs")
obj.Promise = global.Promise;
let uri = "mongodb://localhost:27017/meanstack";
const mongooseDbOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}
obj.connect(uri, mongooseDbOptions);
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.on("open",()=>{
    let CallRecordsSchema = obj.Schema({
        _id:String,
        source:String,
        destination:String,
        sourceLocation:String,
        destinationLocation:String,
        callDuration:String,
        roaming:String,
        callCharge:String
    });
    let CallRecord = obj.model("CallRecord",CallRecordsSchema);
    fs.readFile("call_data.json",(err,data)=> {
        if(!err){
            let callDataString = data.toString()
            let callJson = JSON.parse(callDataString);
            for(let i=0; i< callJson.length; i++){
                console.log(callJson[i]);
                let cr1 = new CallRecord(callJson[i])
                cr1.save((result,err)=>{if(!err){console.log(err)}obj.disconnect();})
            }
        }
    })
    
})