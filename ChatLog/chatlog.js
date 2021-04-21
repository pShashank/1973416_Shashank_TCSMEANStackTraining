let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let obj = require("mongoose");
obj.Promise = global.Promise;

let uri = "mongodb://localhost:27017/meanstack";
const mongooseDbOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}
obj.connect(uri, mongooseDbOptions);
let db = obj.connection;
db.on("error",(err)=>console.log(err));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

db.on("open",()=>{
    let ChatSchema = obj.Schema({
        name:String,
        message:String
    });
    let ChatRecord = obj.model("ChatRecord",ChatSchema);
    io.on("connection",(socket)=>{
        console.log("client connected to application...")
        let chat={
            name:"",
            message:""
        }
        socket.on("name", (name)=>{
            chat.name = name;
        })
        socket.on("chat message", (msg)=>{
            chat.message = msg;
            console.log(chat)
            let c1 = new ChatRecord(chat);
            c1.save((result,err)=>{if(!err){console.log(err)}obj.disconnect();})
        })
        // console.log(chat);
        
    })
    
})

http.listen(9090,()=>console.log("Server running on port 9090"))