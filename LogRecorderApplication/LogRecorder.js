

function logRecorder(){
    let obj = require("readline-sync");
    let fname = obj.question("Enter your firstname ");
    let lname = obj.question("Enter your lastname ");
    let gender = obj.question("Enter your gender ");
    let email = obj.question("Enter your email ");
    debugger;
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let datetime = year + "/" + month + "/" + date + "-" + hours + ":" + minutes + ":" + seconds;

    let log = {"fname": fname, "lname": lname, "gender": gender, "email": email, "datetime": datetime};
    let logArray = new Array();

    logArray.push(log);
    let fs = require('fs')
    fs.readFile('logs.json', function (err, data) {
        var json = JSON.parse(data);
        json.push(...logArray)
        fs.writeFile("logs.json", JSON.stringify(json), function(err){
        if (err) throw err;
        debugger;
        console.log('Log data was appended to file!');
        });
    })
}
module.exports ={logRecorder}
