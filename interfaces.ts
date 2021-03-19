interface Detail{
  // make:string;
  // model:Date;
  // broken:boolean;
  summary(): string
}


const oldCivic = {
  make: 'honda',
  model: new Date(),
  broken: false,
  summary():string{
    return `Name:${this.make}`
  }
};

const drinks ={
  color:'brown',
  carbonated: true,
  sugar:40,
  summary():string{
    return `Name:${this.color}`
  }
}

const printDetail=(detail:Detail):void=>{
  // console.log(`make:${vehicle.make}`);
  // console.log(`model:${vehicle.model}`);
  // console.log(`broken?:${vehicle.broken}`);
  console.log(detail.summary());
}
printDetail(oldCivic);
printDetail(drinks);