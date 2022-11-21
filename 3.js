let string = 'Hello';

let strReverse = (string) => {
    let resalt = string.split("").reverse().join("");
    return resalt;
};
console.log(strReverse(string));