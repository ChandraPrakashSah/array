///     find largest and smallest element in array
// let array = [5, 4, 2, 8, 7, 9, 1, 16, 8],
//   smallest = array[0],
//   largest = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (smallest > array[i]) {
//     smallest = array[i];
//   }
//   if (largest < array[i]) {
//     largest = array[i];
//   }
// }
// console.log("The smallest value is : " + smallest);
// console.log("The largest value is : " + largest);

////Create a 2 dimensional array of numbers, [[1,2,3,4],[5,6,7,8]]  and sort the inner arrays in descending order based on the sum of elements in the array

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
let array = [];

arr.forEach((ele) => {
  res = sum(ele);
  array.push([res]);
});
function sum(element) {
  let res = 0;
  element.forEach((ele) => {
    res = res + ele;
  });

  return res;
}
//  console.log(res)
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
       if(array[i]<array[j]){
           let temp=array[i];
           array[i]=array[j];
           array[j]=temp;
       } 
    }
}
console.log(array);

