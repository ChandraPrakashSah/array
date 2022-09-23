// console.log(navigator.appVersion)


///objrct literal

// let book={
//        title:"book1",
//        author:"john doe",
//        year:"2013",

//        printBookDetails:function(){
//            return `${this.title} was written by ${this.author} in the  ${this.year}`
//        }

// }
// console.log(book.printBookDetails());
// console.log(Object.values(book));


// ///constructor  function


// function Book(){
//      console.log("this is a book");
// }
// const obj=new Book();




///Create a 2 dimensional array of numbers, [[1,2,3,4],[5,6,7,8]]  and sort the inner arrays in descending order based on the sum of elements in the array




var res=0;
function sum(ele){
     res=res+ele;
     return res;
}

let arr=[[1,2,3,4],[5,6,7,8]];
let array=[];

arr.forEach((ele)=>{
    var a=sum(ele);
    array.push([a]);
    console.log(a)
})



console.log(array)


