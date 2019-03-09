//constructor function for a house
function House(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
}

var display1 = document.getElementById("display1");

function form1() {
    var color = oldColor.value;
    var size = oldSize.value;
    var price = oldPrice.value;

    var oldHouse = new House(color, size, price);

    display1.innerHTML = "You made a " + oldHouse.color + " house that's worth $" + oldHouse.price + " and is  " + oldHouse.size + " square feet.";
}

function form2() {

    var color = Color.value;
    var size = Size.value;
    var price = Price.value;

    var  myHouse = new House(color, size, price);
    //Create a prototype for the value of the home
    House.prototype.value = function() {
        return this.price + " for " + this.size;
    };

    //display the prototype
    document.getElementById("pType").innerHTML = "The value of the new home is " + myHouse.value();
}
        