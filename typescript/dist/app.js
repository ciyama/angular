var message = "Helpe me, Obi-Wan Kenobi. You're my only hope";
console.log(message);
var episode = 4;
//episode = '4'
console.log("This is episode " + episode);
episode += 1;
console.log("Next episode is " + episode);
var favoriteDroid; //quando nao declaramos a variavel ele atribui any
favoriteDroid = "BB-8"; //any variavel pode ter qualquer valor.
favoriteDroid = 10;
favoriteDroid += 1;
console.log("My favorite droid is: " + favoriteDroid);
var favoriteDroid2;
favoriteDroid2 = '10';
console.log('Teste ${favoriteDroid2}');
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
// distance = 11
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
