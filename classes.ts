class Vehicle{
  
  constructor(public color:string){
    
  }
  protected honk():void{
    console.log('peep peep');
  }
}

//method overriding
class Bike extends Vehicle{
  constructor(public wheels:number,color:string){
    super(color);

  }

  private drive():void{
    console.log('Vroom Vroom');
  }
  startDrivingProcess():void{
    this.drive();
    this.honk();
  }
}

const vehicle=new Vehicle('orange');
//vehicle.drive();
//vehicle.honk();
console.log(vehicle.color);

const bike=new Bike(2,'Red-black');
bike.startDrivingProcess();
//bike.honk();

