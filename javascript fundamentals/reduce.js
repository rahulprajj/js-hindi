const numbers=[1,2,3]
const cart= numbers.reduce(function (acc , cvalu) {
    console.log(`acc:${acc} and cvalu:${cvalu}`);
    return  acc + cvalu 
},1)
console.log(cart);


// const numbers=[1,2,3]
// const cart= numbers.reduce( (acc , cvalu) =>{
//     return  acc + cvalu 
// },1)
// console.log(cart);