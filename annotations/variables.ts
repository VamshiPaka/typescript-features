let apples: number=3;
let speed : string = 'kmph';
let hasName: boolean = true;
let nothingMuch: null=null;
let nothing:undefined=undefined;
//built in objects
let now: Date = new Date();
//Array
let colors: string[] = ['red','green','blue'];
let myNumbers:number[]=[1,2,3];
let truthTable:boolean[]=[true,false,true];
//classes
class Car{

}
let car:Car = new Car();
//Object literal
let point: {x:number;y:number,sum:string} = {
  x:10,
  y:10,
  sum:'add'
}
//Function
const logNumber: (i:number)=>void=(i:number)=>{
  console.log(i);
}
// when to use annotations
//1) Function that returns the any type
const json ='{"x":10,"y":20}';
const coordinates :{x:number,y:number}= JSON.parse(json);
//2) When we declare a avariable on one line
// and initialize it later
let words = ['red','green','blue']
let foundWord=false;

words.forEach(element => {
  if(element==='green')
  foundWord=true;
});
//3) Variable whose type cannot be infered correctly
let numbers = [-10,-1,10];
let numberAboveZero:boolean|number=false;

numbers.forEach(element => {
  element>0?numberAboveZero=element:numberAboveZero=false
});