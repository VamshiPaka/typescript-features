const drink ={
  color:'brown',
  carbonated: true,
  sugar:40
}
//Type alias
type Drink = [string,boolean,number];

const coke: Drink = ['brown',true,40];
const thumpsUp: Drink = ['clear',true,50];
const tea : Drink = ['brown',false,20];

const carSpecs:[number,number]=[5,1998];

const carStats={
  seating:5,
  cc:1998
};