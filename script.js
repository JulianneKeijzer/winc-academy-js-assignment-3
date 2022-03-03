const age = 18;
const isFemale = true;
const driverStatus = "designated";

if (age>= 18) {
    console.log("You may enter the pub")
} else {
    console.log("Sorry you're under 18, please stay outside the pub");
}

if (isFemale) {
    console.log("We wish you a lovely ladies night!");
} else {
    console.log("Sorry, ladies only!");
}

if (driverStatus === "designated"){
    console.log("You're the designated driver, you can drive!");
} else {
    console.log("You're the designated driver, shall I call a cab?");
}

