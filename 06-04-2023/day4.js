// function primes(arr) {
//     let arrayElement = [];
//     arr.forEach((num)=>{
//         let fact = 0
//         for (let i = 0; i <= num; i++) {
//             if ((num % i )=== 0) {
//                 fact++
//             }
//         }
//         if (fact === 2) {
//             arrayElement.push(num)
//         }
//     })
//     console.log(arrayElement)
// }
// primes([12,33,11,7,9,8,2])


// function toUpperStr(arr){
//    arr.forEach((a)=>{
//     console.log(a.toUpperCase())
//    })
// }
// toUpperStr(['the','basine','bridge','is','near','to','Home Town'])

// const long=(arr) =>{
//     let max=arr[0].length
//     arr.map(element => max= Math.max( max, element.length))
//     let result=arr.filter(element => element.length === max)
//     console.log("the longest element of the array with",max,"elements is :" )
//     return result;
// }
// const arr=['sreeja','is','going','to','her','home']
// console.log(long(arr));


//  lengthList =(arr) =>{
//     let max=0;
//     arr.map(ele => max = max+ ele.length)
//     console.log("the length of given list is:",max )
  
// }
// const arr=['metro','train','chennai']
// lengthList(arr);


// let ar=[3,4,-9,8,-6,-8,-10,-90]
// let pos=ar.map(a=>{
//     if(a<0){
//       a=-(a)
//       return a
//     }
//     else{
//         return a
//     }
// })
// console.log(pos)


// let a=['60%','90%','80%','12%','45%','55%']
// let arfil=a.filter(ar =>{
//  if(ar >'70%'){
//     return ar
//  }
// })
// console.log(arfil)