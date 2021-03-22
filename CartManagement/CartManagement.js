// export class Item {
//     constructor(public name:string,public price:number){
//         this.name = name;
//         this.price = price;
//     }
// }
var itemList = [];
function addItem(buttonId) {
    var addbtn = document.getElementById(buttonId);
    var parent = addbtn.parentElement;
    var name = parent.getElementsByTagName("h1").item(0).innerHTML;
    var price = parseInt(parent.getElementsByTagName("p").item(0).innerHTML);
    // let price = parent.getElementsByTagName("p").item(0).innerHTML;
    console.log(price);
    var item = {
        itemname: name,
        itemprice: price
    };
    itemList.push(item);
}
function storeInSession() {
    sessionStorage.setItem("Items", JSON.stringify(itemList));
    console.log(JSON.stringify(itemList));
}
