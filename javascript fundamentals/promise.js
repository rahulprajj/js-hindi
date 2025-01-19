// // const promise = new Promise(function(resolve,reject)
// // {
// //     setTimeout(() => {
// //         console.log("task complete");
// //         // resolve is called for then ,to conneton to then
// //         resolve()  

// //     }, 1000);
// // })
// // promise.then(function(){
// //     console.log("single task");
// // })
// /*************second way creating promise without variable******************** */

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("task complete");
//         // resolve is called for then ,to conneton to then
//         resolve()  

//     }, 1000);
// })
// .then(function(){
//     console.log("single task");
// })

const promise = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true 
        if ( error==true) {
            resolve({user:"rahul",id:123})
            
        }
        else
        {
            reject({user:error})
        }
        
    }, 1000);
}
)
promise.thej

