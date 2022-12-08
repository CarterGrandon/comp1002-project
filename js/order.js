let items = [0, 0, 0, 0, 0, 0]; //stores number of each item ordered
let innerTotal=0; //total in number of cents, prevents internal decial weirdness
let total = 0; //real total

//listeners for every button, it's ugly but it's what I was able to figure out
document.getElementById("add1").addEventListener("click", addTo1)
document.getElementById("add2").addEventListener("click", addTo2)
document.getElementById("add3").addEventListener("click", addTo3)
document.getElementById("add4").addEventListener("click", addTo4)
document.getElementById("add5").addEventListener("click", addTo5)
document.getElementById("add6").addEventListener("click", addTo6)

document.getElementById("remove1").addEventListener("click", removeFrom1)
document.getElementById("remove2").addEventListener("click", removeFrom2)
document.getElementById("remove3").addEventListener("click", removeFrom3)
document.getElementById("remove4").addEventListener("click", removeFrom4)
document.getElementById("remove5").addEventListener("click", removeFrom5)
document.getElementById("remove6").addEventListener("click", removeFrom6)

document.getElementById("make-order").addEventListener("click", finishOrder)

//here's the real stinky part, a separate function for every button because I didn't want to figure out the combination of parameters and event listeners
//add items functions
function addTo1() {
    items[0]++; //+1 to chosen item
    document.getElementById("item-1").innerHTML = "Item 1 x " + items[0]; //update readout
    updateTotal(); //update total
}

function addTo2() {
    items[1]++;
    document.getElementById("item-2").innerHTML = "Item 2 x " + items[1];
    updateTotal();
}

function addTo3() {
    items[2]++;
    document.getElementById("item-3").innerHTML = "Item 3 x " + items[2];
    updateTotal();
}

function addTo4() {
    items[3]++;
    document.getElementById("item-4").innerHTML = "Item 4 x " + items[3];
    updateTotal();
}

function addTo5() {
    items[4]++;
    document.getElementById("item-5").innerHTML = "Item 5 x " + items[4];
    updateTotal();
}

function addTo6() {
    items[5]++;
    document.getElementById("item-6").innerHTML = "Item 6 x " + items[5];
    updateTotal();
}

//remove items functions
function removeFrom1() {
    if (items[0] > 0) { //do not remove from 0
        items[0]--; //-1 to chosen item
    }
    document.getElementById("item-1").innerHTML = "Item 1 x " + items[0]; //update readout
    updateTotal(); //update total
}

function removeFrom2() {
    if (items[1] > 0) {
        items[1]--;
    }
    document.getElementById("item-2").innerHTML = "Item 2 x " + items[1];
    updateTotal();
}

function removeFrom3() {
    if (items[2] > 0) {
        items[2]--;
    }
    document.getElementById("item-3").innerHTML = "Item 3 x " + items[2];
    updateTotal();
}

function removeFrom4() {
    if (items[3] > 0) {
        items[3]--;
    }
    document.getElementById("item-4").innerHTML = "Item 4 x " + items[3];
    updateTotal();
}

function removeFrom5() {
    if (items[4] > 0) {
        items[4]--;
    }
    document.getElementById("item-5").innerHTML = "Item 5 x " + items[4];
    updateTotal();
}

function removeFrom6() {
    if (items[5] > 0) {
        items[5]--;
    }
    document.getElementById("item-6").innerHTML = "Item 6 x " + items[5];
    updateTotal();
}

function updateTotal() { //update the total readout
    innerTotal= items[0] * 999 + items[1] * 799 + items[2] * 1199 + items[3] * 1599 + items[4] * 2499 + items[5] * 1999; //calculate in cents
    total=innerTotal/100; //convert to dollars
    document.getElementById("total").innerHTML = "Total: $"+ total; //update readout
}

function finishOrder() { //Submits the order. Nothing is actually submitted because I did not think that far ahead
    if(total>0)
    {
        alert("Thank you for your order! Your total is $"+total); //order placed message
        location.reload(); //reload the page to prevent multiple submissions of the same order
    }
    else
    {
        alert("You can not order because nothing has been selected yet.") //nothing selected
    }
}