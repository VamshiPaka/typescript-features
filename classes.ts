class Vehicle{
  color: string='red';
  protected honk():void{
    console.log('peep peep');
  }
}

//method overriding
class Bike extends Vehicle{
  private drive():void{
    console.log('Vroom Vroom');
  }
  startDrivingProcess():void{
    this.drive();
    this.honk();
  }
}

const vehicle=new Vehicle();
//vehicle.drive();
//vehicle.honk();
console.log(vehicle.color);

const bike=new Bike();
bike.startDrivingProcess();
//bike.honk();

