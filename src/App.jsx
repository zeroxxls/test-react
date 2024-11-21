import React from "react";
import './index.css'

const App = () =>{
const array = [{hello:'world'},{hello:'people'}];
const arrayReactElements=[];

//const result = array.map((obj)=>{
  //  return(
    //    <div>{obj.hello}</div>
    //)
//})
//array.forEach((obj)=>{
  //  arrayReactElements.push(
    //       <div>{obj.hello}</div>
    //)
//});

//for(let i = 0; i<array.length; i++){
//    const obj = array[i];
//
//    arrayReactElements.push(
//        <div>{obj.hello}</div>
//    )
//}

console.log(array)
console.log(arrayReactElements)
   return(
    <div>
        {array.map((obj)=>{
    return(
            <div>{obj.hello}</div>
            )
        })}
    </div>
   );
}

export default App;