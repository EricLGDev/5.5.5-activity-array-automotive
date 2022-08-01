//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " does not have any room left.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full.")
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Engine has started.");
            return this.started = true
        } else {
            console.log("No fuel.");
            return this.started = false;
        }
    }
    
}

//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");

v.start()
v.loadPassenger(5)
v.stop()
v.checkService()

console.log(v)
