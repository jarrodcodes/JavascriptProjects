var bill = window.prompt("What amount was your dinner bill?");
var service = window.prompt("How good was your service? Good, fair or poor?");

function tipAmount(bill, service) {
    var tip;
    if (service === "Good" || service === "good") {
        tip = (bill / 20.00);
    } else if (service === "Fair" || service === "fair") {
        tip = (bill / 15.00);
    } else if (service === "Poor" || service === "poor") {
        tip = (bill / 10.00);
    }
    window.alert("Your tip amount is $" + tip);
}

tipAmount(bill, service);