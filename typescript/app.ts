class Spacecraft {

  constructor (public propulsor: string){}

  jumpIntoHyperspace() {
    console.log(`Entering hyperspace whith ${this.propulsor}`)
  }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace();

class MillenniumFalcon extends Spacecraft implements ContainerShip{

  cargoContainers: number

  constructor() {
    super('hyperdrive')
    this.cargoContainers = 2
  }

  jumpIntoHyperspace() {
    if (Math.random() >= 0.5){
      super.jumpIntoHyperspace()
    } else (console.log('Failed to jump into Hyperspace'))
  }
}

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

interface ContainerShip {

  cargoContainers: number
}

let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'Yes': 'no'}`)
