// let x =10;
// const PI =3.1416

// function testFunc(){
//   let num1 =12;
//   console.log("Value from function:",num1)
// }

// testFunc();


//Hosting
// const func1=()=>{
//   console.log("Func 1");
// }
// func1();


// #The strict mode
// "use strict"
// let x =100;
// console.log(x);



//spread operator
// const arr1 = [1,2,3,4]
// const arr2 = [...arr1, 5,6,7]
// console.log(arr2);

// const arr1 = [1,2,3,4], arr2 = [...arr1,5,6,7]; 
// console.log("[" + arr2.join(", ") + "]");


// const obj1 ={a:1,b:2}
// const obj2 ={...obj1, c:10}
// console.log(obj2);


// # Rest Parameter
// function sum(...number){
//   const sum =number.reduce((acc,num)=>acc+num,0);
//   return sum

// }
// const result = sum(12,23,35,4)
// console.log(result);


// # ES6 array de-structuring
// const number =[10,20,30]
// const [num1,num2,num3]=number;
// console.log(num1,num2,num3);


//Arrow function
// const sum =(num1,num2)=>num1+num2
// console.log(sum(100,200))




// function creatMultiplier(factor){
//   return function(num){
//     return num * factor;
//   }
// }
// const double =creatMultiplier(2)
// console.log(double(20))



// const name = "Sazzad"
// const age = 20
// const person={name,age}
// console.log(person);


// const obj1 ={a:1,b:2}
// const {a,b}=obj1;
// console.log(a,b)


// const car ={
//   brand :"Tesla",
//   model :"Model s",
//   grtInfo(){
//     return `Brand ${this.brand} Model ${this.model}`
//   }
// }
// console.log(car.grtInfo());


// #Loops
// const arr =["Jodu","Module","Kodu"]
// for (let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// ES6 : For ..of
// const arr =["Jodu","Module","Kodu"]
// for (let Value of arr){
//   console.log(Value);
// }

//ES6 For..in
// const obj ={name:"Sazzad",age:23}
// for(let key in obj){
//   console.log(key,obj[key]);
// }


// Decision-making

// let age =18
// if(age>=18){
//   console.log("You are adult")
// }else{
//   console.log("You are a minor")
// }

// const result =age>=18?"You are adult":"You are a minor"
// console.log(result);


// #ES6 MAP
// const users =new Map()
// users.set(1,"Jodu")
// users.set(2,"Modu")
// users.set(3,"Kodu")

// console.log(users);
// console.log(users.get(3));
// console.log(users.has(2));
// console.log(users.has(5));

// for(let user of users){
//   console.log(user);
// }

// for(let [key,Value] of users){
//   console.log(key);
// }

// const userArray =[...users]
// console.log(userArray);


// ES6 set
// const numberSet =new Set([1,2,3,4,5,5,6])
// numberSet.add(7)

// console.log(numberSet)
// console.log(numberSet.has(50));

