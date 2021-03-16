function retrieveFromSession() {
    var list = JSON.parse(sessionStorage.getItem("projInfo"));
    console.log(list.length);
    return list;
}
function insertNewRecord(list){
    
    var table = document.getElementById("projectList")
    var body = table.getElementsByTagName("tbody")[0];
    var i;
    var totalbudget = 0;
    for (i = 0; i < list.length; i++){
        var newRow = body.insertRow(body.length);  // row created 
    
        var cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=JSON.parse(list[i]).client;                 // value placed 
    
        var cell2 = newRow.insertCell(1);          // cell created 
        cell2.innerHTML=JSON.parse(list[i]).project;                 // value placed
    
        var cell3 = newRow.insertCell(2);          // cell created 
        cell3.innerHTML=JSON.parse(list[i]).budget;                 // value placed
        console.log(JSON.parse(list[i]).budget);
        totalbudget = totalbudget + parseInt(JSON.parse(list[i]).budget);
    }
    document.getElementById("total").innerHTML = totalbudget.toString();
}

var data = retrieveFromSession()
insertNewRecord(data)