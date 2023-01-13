/*
we will create examples of classes in js using starcrat units

for terran units we will have the following properties: 
name: unit name for example: marine, being a string
hp: unit health points, being a number
damage: unit damage, being a number
type: for example: ground, air, being a string

The class terran units will have the following methods:
attack: for this example we only need to print the name of the damage and 
the damage made by the unit



*/

class TerranUnit {
  constructor(name, hp, damage, type) {
    this.name = name
    this.hp = hp
    this.damage = damage
    this.type = type
  }

  attack() {
    console.log(`${this.name} deals ${this.damage} damage`)
  }

  phrase() {
    console.log(`I am ${this.name}`)
  }
}

// We will instantiate the class terran unit to create a marine unit

class Marine extends TerranUnit {
  constructor() {
    super("Marine", 40, 6, "ground")
  }

  attack() {
    super.attack()
    console.log("For the Alliance!")
  }

  phrase() {
    super.phrase()
    console.log("For the Alliance!")
  }
}
