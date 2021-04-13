let http = require("http");
const fs = require('fs');
let url = require("url");
let port = 9999;
let inputcontent = `
            <div class="col text-center">
                <h3>Add Tasks</h3><br/>
                <form action="/addTask" method="get">
                    <label>Emp ID</label>
                    <input type="number" name="empid"/><br/>
                    <label>Task ID</label>
                    <input type="text" name="taskid"/><br/>
                    <label>Task</label>
                    <input type="text" name="task"/><br/>
                    <label>Deadline</label>
                    <input type="text" name="deadline"/><br/>
                    <input type="submit" value="Add Details" /><br/>
                    <input type="reset" value="reset"/><br/>
                </form>
            </div>
            <br/>
            <hr>
            <br/>
            <h3>Delete Task</h3>
            <div>
                <form action="/deleteTask" method="get">
                    <label>Task Id</label>
                    <input type="text" name="taskId"/><br/>
            
                    <br/>
                    <input type="submit" value="Delete Task"/>
                    <input type="reset" value="reset"/>
                    </div>
                </form>
            </div>
            <br/>
            <hr>
            <br/>
            <div class="col">
                <table id="taskList">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Task</th>
                            <th>DeadLine</th>
                        </tr>
                    </thead> 
                    <tbody>
                    </tbody>
                </table>
            </div>
            <br/>
            <hr>
            <br/>
            <div>
                <h3>List Tasks</h3><br/>
                <form action="/display" method="get">
                    <input type="submit" value="View Current Tasks"/>
                </form>
            </div>
            
`

function getTasks(){
    let taskList = new Array();
    taskList = [];
    let prevTask = fs.readFileSync("tasks.json");
    let prevString = prevTask.toString();
    let prevJSON = JSON.parse(prevString);
    
    for (var x in prevJSON){
        taskList.push(prevJSON[x]);
    }
    return taskList;
}
let server = http.createServer((request,response)=> {
    var pathInfo = url.parse(request.url,true).pathname;
    response.setHeader("content-type","text/html"); 
    response.write(inputcontent);
    if(pathInfo=="/addTask"){
        let data = url.parse(request.url, true).query;
        let taskList = getTasks();     
        let flag = true; 
        for ( let row in taskList ) {
            if ( taskList[row].taskid == data.taskid ) {
                console.log("Task already exists.\nPlease review Task ID.");
                unique = false;
            }
        }
        if (flag) {
            let obj = {"empid":data.empid, "taskid":data.taskid, "task":data.task,"deadline":data.deadline};
            let taskJSON = JSON.parse(JSON.stringify(obj));
            taskList.push(taskJSON);
            var listString = JSON.stringify(taskList);
            fs.writeFileSync("tasks.json", listString);
            console.log("Task added successfully.")        
        }
    }
    else if(pathInfo=="/display"){
        var jsonData = require("./tasks.json");
        var tablebody ="";
        
        for(var i = 0; i<jsonData.length;i++)
        {
            tablebody += ` <tr>
                                <td>${jsonData[i].empid}</td>
                                <td>${jsonData[i].taskid}</td>
                                <td>${jsonData[i].task}</td>
                                <td>${jsonData[i].deadline}</td>
                            <tr>
                                `
        }
        tableData = `
        <table border = "1">
            <tr>
                <th>Emp id</th>
                <th>task id</th>
                <th>Task detail</th>
                <th>Date</th>
            <tr>           
               ${tablebody}           
        </table>
        `
        response.end(tableData);
    } else if ( pathInfo == "/deleteTask" ) {
        let data = url.parse(request.url, true).query;
        let taskList = getTasks();
        for ( let row in taskList ) {
            if ( taskList[row].taskid == data.taskId ) {
                taskList.splice(row, 1);
                console.log("Task ID "+data.taskId+" has been removed successfully");
            }
        }
        var listString = JSON.stringify(taskList);
        fs.writeFileSync("tasks.json", listString);   
    }
    response.end();
});

server.listen(port,()=>console.log(`Server is running on port number ${port}`));