function retrieveFromSession() {
    var list = JSON.parse(sessionStorage.getItem("Items"));
    console.log(list[0].itemname);
    console.log("reached");
    return list;
}
function insertNewRecord(list) {
    var table = document.getElementById("itemList");
    var body = table.getElementsByTagName("tbody")[0];
    var i;
    var totalcost = 0;
    console.log(list.length);
    for (i = 0; i < list.length; i++) {
        var newRow = body.insertRow(-1); // row created 
        var cell1 = newRow.insertCell(0); // cell created 
        cell1.innerHTML = list[i].itemname; // value placed 
        var cell2 = newRow.insertCell(1); // cell created 
        cell2.innerHTML = list[i].itemprice; // value placed
        totalcost = totalcost + parseInt(list[i].itemprice);
    }
    document.getElementById("total").innerHTML = totalcost.toString();
}
var data = retrieveFromSession();
insertNewRecord(data);
