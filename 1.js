let number = +prompt("введите число");

console.log(typeof number);


if (typeof(number) === "number") {
    if(isNaN(number)) {
        console.log("oups you mestake");
    } else if ((number%2) == 0) {
        console.log("chetnoe");
    } else {
        console.log("nechetnoe")
    }
}