class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= 0) {
            throw Error("Not enough parking space.");

        }
        let car = { carModel, carNumber, payed: false }
        this.vehicles.push(car);
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        let car = this.vehicles.find(c => c.carNumber === carNumber);
        if (!car) {
            throw Error("The car, you're looking for, is not found.");
        }
        else if (car.payed == false) {
            throw Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        else {
            this.vehicles.pop(car);
            this.capacity++;
            return `${carNumber} left the parking lot.`
        }
    }
    pay(carNumber) {
        let car = this.vehicles.find(c => c.carNumber === carNumber);
        if (!car) {
           throw Error(`${carNumber} is not in the parking lot.`);

        }
        else if(car.payed){
            throw Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        else{
            car.payed=true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }

    }
    getStatistics(carNumber){

        if(carNumber){
            let car = this.vehicles.find(c => c.carNumber === carNumber);
return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
        }
        else{
            let cars =[];
            cars.push(`The Parking Lot has ${ this.capacity } empty spots left.`)
          this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel)).forEach(car => cars.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`));
return cars.join('\n')
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.vehicles[0])

console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.capacity)
console.log(parking.removeCar("TX3691CA"));



