// for in and for Of
//prototype and _ _ prototype
//shallow rendering
//diff between em and rem
//propagation
//react fibre
//

// var digits = [1,2,3,1,2,3]
// var remdup = {}
// digits.forEach((e,i)=>{
//     if(remdup[e]==undefined){
//         remdup[e]=digits
//     }
// })
// var resultDup = Object.keys(remdup).map((e,i)=>{return parseInt(e)})
// console.log(resultDup)



//// Remove duplicates 

/* var numArray = [1,2,3,1,4,2,5,3]
numArray.filter((val,index)=>{
 return numArray.indexOf(val)== index
})*/

/*------------------------------------------------------------------------------------
second method

var numArray = [1,2,3,1,2,3]
var obj = {}
numArray.forEach((val,index)=>{
    if(obj[val]==undefined){
        obj[val] = numArray
    }
})
Object.keys(obj)*/
/*-----------------------------------------------------------------------------------------
Third Method 

/* var numArray = [1,2,1,2,3]
var result = [...new Set(numArray)]
return result */

//----------------------------------------------------------------------------------------------

// /// -------Pallindrome/Reverse string
/* function reverseString(str){
    let emptyString = str.split('').reverse().join('')
    if(emptyString==str){
     console.log("It is Pallindrome")
    }
    else{
    console.log("It is not Pallindrome")
    }
    
    }
    reverseString("kaivalya")*/
//-----------------------------------------------------------------------------------------

//     objects
/*
    var objdetails = {a:"name", b:"city"}
    objdetails.c = "age"
    'age'
    objdetails
    {a: 'name', b: 'city', c: 'age'}
    objdetails["d"] = "address"
    'address'
     objdetails
    {a: 'name', b: 'city', c: 'age', d: 'address'} */
//----------------------------------------------------------------------------------------------------
       /// sorting [1,5,2,6] --o/p [1,2,5,6]
       function bubblesort(arr){
        for(var i=0;i<arr.length;i++)
        {
           for(var j=0;j<arr.length;j++)
           {
              if(arr[j]>arr[j +1]){
                const temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp 
              }
           }
        }
        console.log(arr)
        return arr
       }
       
       bubblesort([2,1,3,7,5,9,8])

//----------------------------------------------------------------------------------

// Array of objects

// var arrObj = [
//                  {name:"kaivalya",age:23,city:"Hyd"},
//                  {name:"Mahi",age:21,city:"Nellore"},
//                  {name:"krish",age:23,city:"vizag"}
//              ]
//              var resultarrObj = arrObj[0].age+ arrObj[1].age + arrObj[2].age
//              console.log(resultarrObj);

/////          using Reduce method  
///////////////arrObj.reduce((acc,val)=>{return acc + val.age},0)
  
//------------------------------------------------------------------------------------------------


// returning function object

    // function funcObj(name,age,city){
    //     return {name:name,age:age,city:city}
    // }
    // funcObj("kaivalya",2,"Tuni")

//-----------------------------------------------------------------------------------------------

// fibonacci
// function fibonacci(){
    
//     var n1 = 0;
//     var n2 = 1
//     for(let i=1;i<=10;i++){
//    console.log(n1)
//      temp = n1 + n2
//      n1 = n2
//      n2  = temp 

//      }

// }
// fibonacci()
    
//--------------------------------------------------------------------------------------

// function factorial(n){
//     if(n==0 || n== 1){
//         return 1
//     }
//     else{
//         return n * factorial(n-1)
//     }
// }
// factorial(5)
//------------------------------------------------------------------------------------------
// function reverseBySeperator(string){
//     return string.split("").reverse().join("").split(" ").reverse().join(" ")
    
//     }
//     reverseBySeperator("welcome to the javascript world")
    
//    o/p -  'emoclew ot eht tpircsavaj dlrow'

//------------------------------------------------------------------------------------------

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//        newString += str[i];
//     }

//     console.log(newString);
// }
// reverseString("kaivalya")
//------------------------------------------------------------------------------------
// how to convert reverse array 
  //let nums = [2,3,1,4]
// let revNumber = []
// for(let i = nums.length-1;i>=0;i--){
// revNumber.push(nums[i])
// }
// console.log(revNumber)
// VM2135:6 (4) [4, 1, 3, 2]
///--------------------------------------------------------------------//
//convert an array to string
var a = [1,2,3]
var arraystring = a.toString()
console.log(arraystring)
//----------------------------------------------------------------------
// Multidimensional array to single array

// var multiArray = [[1,2,3],[4,5],[6,7,8]]
// var singleArray = []
// for(let i=0;i<multiArray.length;i++){
//     singleArray = singleArray.concat(multiArray[i])
// }
// console.log(singleArray)

                // (or)

var array = [1,[2,3],[3],[4,5,6]]
var resultArray = [].concat.apply([],array)
console.log(resultArray)
VM2861:3 (7) [1, 2, 3, 3, 4, 5, 6]
//--------------------------------------------------------------------
//combine two strings
var firstName = "kaivalya"
var lastName = "uppaluri"
var name = firstName.concat(lastName)
name
'kaivalyauppaluri'
////---------------------------------------------------------
///leaders of an array
function leader(arr){
    var store = arr[arr.length-1]
    var final_array = [store]
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]>store){
            store = arr[i]
           final_array.push(arr[i])
        }
    }
    console.log(final_array)
}
leader([13,5,4,32,5,1])

---------------------------------------------------------------
/* let { name: myName, skills = [], experience = 0 }
 = { name: 'Candidate', skills: ['react', 'javascript'] } 
  console.log({ name, skills, experience });  */

/* const obj = {    
     x: 10,     
     y: 20,    
     b: () => console.log(this.x, this),     
     c: function() {         
     console.log(this.y, this);     
    } 
} 
obj.b() // undefined, window 
obj.c() // 20, obj  */

-------------------------------------------
function MaxArray(arr){

    let sorted = arr.sort((a,b)=>{return a- b})
    sorted.pop()
    return sorted.pop()
}
MaxArray([17,15,5,16,2])
16
------------------------------------------


/*  const printString = (string, callback) => 
    {    
        setTimeout(() => {       
         console.log(string);        
         callback();   
         }, 
         Math.random() * 1000);
        };
        const  printName =  () => {
        (printString('ks', () => { 
        (printString('ts', () => {      
        (printString('ds', () => {             
         })); 
       }));  
     }))   
}
printName(); */

// The function should return the extra letter.
/* const getExtra = (bString, eString) => 
{                
    for(let char of eString)
    {       
         if(bString.indexOf(char) === -1)
         {            
             return char;     
        }   
    }
}
console.log(getExtra('bacd', 'abcde'));  */


/*const arr = [{name: "John", age: 30}, {name: "Harold", age: 32}];
const result = arr.reduce((acc,{name, age}) => 
{           
    acc[name] = {name, age};     
    return acc;

}, {})
    console.log(result); */

/* function MaxArray(arr){ 
       let sorted   =  arr.sort((a,b) => {return a-b}) 
       sorted.pop();  
       return sorted.pop(); 
       }
     console.log(MaxArray([17, 10, 16, 5, 4])) */
/*------------------------------------------------------------------ 
  /*function RealNumber(number){
    if(number==null)
        return
        if(number<0){
            return `(${Math.abs(number)})`
        }        
    else(number>0)
     return number.toString()   
} 
console.log(RealNumber(undefined))
console.log(RealNumber(2))
console.log(RealNumber(-3)) 

o/p : undefined , 2,3
*/
/*-----------------------------------------------------------
const books = [
    {
     title:"The hobbit",
     author:"J.R.R.Tolkien",
     alreadyRead:true
    },
    {
      title: "Robin Sharma",
      author: "Robin Hood",
      alreadyRead: false
    },
    {
        title: "chandamama",
        author: "vennela",
        alreadyRead: true
    }
]
for(var i=0;i<books.length;i++){
    var booksData = books[i]
    var bookInfo = booksData.title + '" by ' + booksData.author
    //console.log(booksData.title + "by" + booksData.author)
    if(booksData.alreadyRead){
        console.log('You already read " ' + bookInfo)
    }
    else{
        console.log('You still need to read " ' + bookInfo)
    }
}*/
 /* -----------------------------------------------------------------
 <body>
    <label for="items">Choose the Items List:</label>
    <select  id="items" onChange="listOfItems()">
        <option value="kaivalya">kaivalya</option>
        <option value="mahitha">mahitha</option>
    </select>
    <select id="itemlist"></select>      
    
    <script>
        var itemDetails = {};
            itemDetails['kaivalya']=['chandamama','watchingtv','pulihora']
            itemDetails['mahitha']=['robinhood','playing','biryani']
      function listOfItems(){
        var items = document.getElementById("items")
        var itemsList = document.getElementById("itemlist")
        var selItem = items.options[items.selectedIndex].value;
        while(itemsList.options.length){
            itemsList.remove(0);
        }

        var item = itemDetails[selItem]
        if(item){
            for(var i=0;i<item.length;i++){
                var resultItem = new Option(item[i],i)
                itemsList.options.add(resultItem)
            }
        }
    }
    
    </script>
    
</body>
*/
/*------------------------------------------------------------------------------------
const listOfItems = [
    {
         name:"kaivalya",
         items: {nameOfBook: "chandamama",
                hobbies:"watchingTv",
                favFood: "pulihora"}
    },
    {
        name:"mahitha",     
        items: {nameOfBook: "RobinHood",
                hobbies:"playing",
                favFood: "biryani"}

    },
 
]
function ItemsList(item){
    for(i=0;i<item.length;i++){
        var itemDetails = item[i]
        console.log(itemDetails.name + 
            'list of items are' +
             itemDetails.items.nameOfBook +
             itemDetails.items.hobbies + 
             itemDetails.items.favFood)
    }   
}
ItemsList(listOfItems)
--------------------------------------------------------------------------------------
//All multiples of 3 and 5 less than 20 are 
//3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78.
// sumMultiples(20) should return 78.

function sumMultiples(n){
    let sum = 0
    for(let i=1;i<n;i++)
    {
      if(i % 3 === 0 || i % 5 === 0)
      {
        sum += i       
      }
           
    } 

    console.log(sum) 
    
}
sumMultiples(20)
--------------------------------------------------------------------------------
//points(1, 1) ➞ 5 points(7, 5) ➞ 29 points(38, 8) ➞ 100
// function basketball(n1,n2){
//     var twopointerscored = 2
//     var threepointerscored = 3
//     var result = twopointerscored * n1 + threepointerscored * n2
//     console.log(result)

// }
// basketball(1,1)

// var basketball = (n1,n2)=>{
//     var twopointerscored = 2
//     var threepointerscored = 3
//     var result = twopointerscored * n1 + threepointerscored * n2
//     console.log(result)

// }
// basketball(7,5)
-----------------------------------------------------------------------------



    








    
    