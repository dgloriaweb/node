class Bike {
  constructor(name, make) {
    this.name = name
    this.make = make
  }

  greeting() {
    console.log(`My bike is a ${this.name}`)
  }
}
module.exports = Bike
