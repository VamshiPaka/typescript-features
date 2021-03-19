const carMakers:string[]=['MG','Kia','volvo','audi'];
const dates = [new Date(),new Date()];

const carsByMake= [
  ['hector'],['seltos'],['s60'],['A4']
];

// Help with inference when extracting values
const singleCar=carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(10);

//Help with map
carMakers.map((car:string):string=>{
  return car.toUpperCase();
})

//Flexible Types
const importantDates = [new Date(),'2021-03-19',12,true];
importantDates.push('2020-09-08');
importantDates.push(new Date());