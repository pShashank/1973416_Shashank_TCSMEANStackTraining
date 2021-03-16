
var empObj = [];
function storeInSession() {
    sessionStorage.setItem("projInfo",JSON.stringify(empObj));
}

function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    empObj.push(JSON.stringify(data));      //in empObj
    resetData();
    
}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("clientName").value;
    obj.project = document.getElementById("projectName").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}

function resetData() {
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";
}
