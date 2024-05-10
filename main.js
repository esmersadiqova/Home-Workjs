//! Tapsiriq 1
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] % 2 !== 0) {
//     console.log(num[i] + 1);
//   }
// }

// ! Tapsiriq 3

let num = [9,6,3,2,8,7,1,4,5];

let kicikEd= num[0];
let boyukEd= num[0]

for (let i= 1; i<num.length; i++){
   if(kicikEd > num[i]){
    kicikEd=num[i]
   } 
   if( boyukEd<num[i]){
    boyukEd=num[i]
   }
}
console.log(kicikEd);
console.log(boyukEd);
console.log(kicikEd*boyukEd);
