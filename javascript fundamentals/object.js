
const myname=Symbol("roy")


const newobj={
   name:"rhaul",
    age: 23,
   [ myname]:"roy",
    isloggedIn:false,
  gmail:"rahul@google.com"

}
console.log(newobj.name);
console.log( newobj["gmail"]);
console.log(typeof[myname]);
