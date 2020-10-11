var PHONE = 849, ACCESSORY = 39, VAT = 0.17;
var totalSmartPhones = 0, totalAccessories = 0;
var budget = 4300.00;
// var number = Number(window.prompt("Type your budget", ""));
var number = window.prompt("Type your budget", "");
// console.log(typeof(number))
buySmartPhonesAndAccessories(totalSmartPhones, totalAccessories, (number+0));

function buySmartPhonesAndAccessories(totalSmartPhones, totalAccessories, budget){
    var newBudget = budget;
    while(newBudget > 0){
        if (newBudget > PHONE){
            totalSmartPhones++;
            newBudget -= PHONE + (PHONE*VAT);
        }
        else {
            totalAccessories++;
            newBudget -= ACCESSORY + (ACCESSORY*VAT);
        }
    }
    printMessage(totalSmartPhones, totalAccessories, budget);
}
function printMessage(phones, accessories, amunt){
    var str = "You can purchase ";
    str += phones;
    str += " smartphones and ";
    str += accessories;
    str += " smartphone accessories with total cost of ";
    str += amunt;
    str += " NIS";

    console.log(str);
}