import Vehicle from "./vehicleBaseClass"

class Car extends Vehicle{
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maxPassengers = 6
        this.passenger = 0
        this.ynumberOfWheels = 4
        this.maxSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }
}

loadPassengers(num){
    if(this.passenger < this.maxPassengers){
        if((num + this.passenger) <= this.maxPassengers){
            this.passenger = num
            return this.passenger
        }
        } else{
            console.log("The ${this.model} doesn't have enough space")
     } else {
        console.log("The ${this.model} is full")
     }

start(){
    if(this.fuel > 0){
        console.log("The ${this.model} has started")
    } else {
        console.log("The ${this.model} has no gas")
    }
}

scheduleService(mileage){
    if(this.mileage >= 30000){
        console.log("The ${this.make this.model} needs to be serviced")
        this.scheduleService == true
        return this.scheduleService
    }
}


//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)