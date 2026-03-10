var newList = document.getElementById("newList").value;
var finalList = document.getElementById("finalList");
 
// newList vai ser inserido em finalList com um tratamento para transformar a string em um array

function itemsList (){
    newList.split(', ')
    return `${finalList}` // dentro de uma ol
} 