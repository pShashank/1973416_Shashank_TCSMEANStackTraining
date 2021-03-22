function retrieveFromSession(){
    let list = JSON.parse(sessionStorage.getItem("Items"));
    console.log(list[0].itemname);
    console.log("reached")
    return list;
}

function insertNewRecord(list){
    
    let table = document.getElementById("itemList")
    let body = table.getElementsByTagName("tbody")[0];
    let i;
    let totalcost = 0;
    console.log(list.length)
    for (i = 0; i < list.length; i++){
        let newRow = body.insertRow(-1);  // row created 
    
        let cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=list[i].itemname;                 // value placed 
    
        let cell2 = newRow.insertCell(1);          // cell created 
        cell2.innerHTML=list[i].itemprice;                 // value placed

        totalcost = totalcost + parseInt(list[i].itemprice);
    }
    document.getElementById("total").innerHTML = totalcost.toString();
}

var data = retrieveFromSession()
insertNewRecord(data)