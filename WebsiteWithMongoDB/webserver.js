let app = require("express")();
let http = require("http").Server(app);
let bodyParser = require("body-parser");
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
app.use(bodyParser.urlencoded({extended:true}));   
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
db.on("open",()=>{
    let CourseSchema = obj.Schema({
        _id: Number,
        course: String,
        description: String,
        amount: Number
    });
    let CourseRecord = obj.model("CourseRecord",CourseSchema);

    app.get("/addcourse",(req,res)=>{
        res.sendFile(__dirname+"/addcourse.html");
    });

    app.post("/addcourse",(req,res)=>{
        // console.log(req.body)
        let courseobj={
            _id: req.body.courseid,
            course: req.body.course,
            description: req.body.description,
            amount: req.body.amount
        }
        let c1 = new CourseRecord(courseobj);
        c1.save((result,err)=>{if(!err){console.log(result)}obj.disconnect();})
        res.redirect("/");
    });
    app.get("/updatecourse",(req,res)=>{
        res.sendFile(__dirname+"/updatecourse.html");
    });

    app.post("/updatecourse",(req,res)=>{
        CourseRecord.updateOne({_id: req.body.courseid},{$set:{amount:req.body.amount}},(err,result)=> {    
            if(!err){
                if(result.nModified>0){
                    console.log("Record updated");
                }else {
                    console.log("Record didn't update");
                }
            }
            obj.disconnect();
            res.redirect("/");
        });
    });

    app.get("/deletecourse",(req,res)=>{
        res.sendFile(__dirname+"/deletecourse.html");
    });
    
    app.post("/deletecourse",(req,res)=>{
        // Creating reference using model 
        CourseRecord.deleteOne({_id: req.body.courseid},(err,result)=> {
            if(!err){
                //console.log(result);
                if(result.deletedCount>0){
                        console.log("Record deleted ");
                }else {
                        console.log("Record not present");
                }
            }
            obj.disconnect();
            res.redirect("/");
        });
    });

    app.get("/viewcourse",(req,res)=>{
        // res.sendFile(__dirname+"/fetchcourse.html");
        CourseRecord.find({},(err,result)=>{
            if(!err){
                console.log(result)
                // res.render('course-list', { title: 'Course List', courseData: result});
            }
            else{
                console.log(err)
            }
            obj.disconnect();
        }).then((result)=> {
            res.setHeader("content-type","text/html"); 
            res.write(`
            <body>
            <table style="width : 100%">
                <table border="1" id="courseList">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                ${result.map((doc) => 
                    `<tr>
                    <td>${doc._id}</td>
                    <td>${doc.course}</td>
                    <td>${doc.description}</td>
                    <td>${doc.amount}</td>
                    </tr>`
                ).join('\n')} 
                </tbody>
            </table>
            </body>`)
            res.end()
        }) 
    });
})

http.listen(9090,()=>console.log("Server running on port 9090"))