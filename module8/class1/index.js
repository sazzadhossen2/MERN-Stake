// let person ={
//   firstname:"Sazzad",
//   LastName:"Hossen",
//   age:25,
//   isDeveloper:true
// }
// console.log(person);
// console.log(person.age);

// person.age=30;
// console.log(person);

// let personkey =Object.keys(person);
// console.log(personkey);
// let personvalue =Object.values(person);
// console.log(personvalue);
// let personEntity =Object.entries(person);
// console.log(personEntity);
// console.log(personEntity[1]);





// let person ={
//   firstname:"Sazzad",
//   LastName:"Hossen",
//   age:25,
//   isDeveloper:true
// }

// for(let entries of Object.entries(person)){
//   console.log(entries[0],"",entries[1]);
// }



// let per =JSON.stringify(person);   //{"firstname":"Sazzad","LastName":"Hossen","age":25,"isDeveloper":true}
// console.log(per);

// let perResponse='{"firstname":"shamim","LastName":"walk","age":25,"isDeveloper":true}'
// let personRes= JSON.parse(perResponse);
// console.log(personRes);



//array
// let name=["Sazzad","shamim","hossen"]
// console.log(name);
// console.log(name.includes("Sazzad"))
// console.log(name.includes("shafin"))
// name.push("sham")
// console.log(name)
// name.pop()
// console.log(name)

// name.forEach((a) => console.log(a ,': ok'));



// let number=[1,2,3,4,5,6,7,8]
// let evenNumber= number.filter((num)=>num%2 ===0)
// console.log(evenNumber)
// let oddNumber= number.filter((num)=>num%2 !==0)
// console.log(oddNumber)

// let sqrNumber= number.map((num)=>num * num)
// console.log(sqrNumber)





// let names=["sazzad","Hossen","shamim"]
// let newName=[]
// for(let i =0;i<name.length;i++){
//   if(name[i] !=="Hossen"){
//     newName.push(name[i])
//   }
// }

// let newName=names.filter((n)=>n !=="Hossen")

// console.log(newName)




// let number=[12,2,31,4,15,6,57,8]
// let number=["Xazzad","Hossen","shamim"];
// number.sort();
// console.log(number);


// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
console.log(Math.min(200,12,333,122));
console.log(Math.max(200,12,333,122));
