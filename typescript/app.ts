let message: string = "Helpe me, Obi-Wan Kenobi. You're my only hope"

console.log(message)

let episode: number = 4
//episode = '4'
console.log("This is episode " + episode)
episode += 1
console.log("Next episode is " + episode)

let favoriteDroid //quando nao declaramos a variavel ele atribui any
favoriteDroid = "BB-8" //any variavel pode ter qualquer valor.
favoriteDroid = 10
favoriteDroid += 1
console.log("My favorite droid is: " + favoriteDroid);

let favoriteDroid2:string
favoriteDroid2 = '10'
console.log('Teste ${favoriteDroid2}' )


let isEnoughtToBeatMF = function (parsecs: number) : boolean {
  return parsecs < 12
}

let distance = 14
// distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughtToBeatMF(distance) ? 'YES': 'NO'}`)


let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')

function inc(speed: number, inc: number = 1): number {
  return speed + inc
}

console.log(`inc(5, 1) = ${inc(5, 1)}`)
console.log(`inc(5) = ${inc(5)}`)
