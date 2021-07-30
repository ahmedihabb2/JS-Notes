//function declaration
function myFunc()
{
    console.log("Hello There");
}

//function Expression

const manga = function(){
    console.log("Hello Mr.Manga");
};


//arrow function
//if we are passing one parameter we can remove brackets ()
const calcArea = (radius) => {
    return 3.14 * radius**2;
};
// if the function one line we can write it as follows :
/*
    const calcArea = radius => 3.14 * radius **2;
*/

//Calling 

myFunc();
manga();
let area = calcArea(10);
console.log(area);

/*
    Hoisting => hoist the function to the top of the file
    Hoisting works with function decleration thats mean if we declared the function at the bottom of the file 
    I am still able to call it from anywhere above the decleration
    Hoisitng doesn't work with function expressions
*/

//Callback function

const myFunc2 = (callbackfunc)=>{

    let val = 50;
    callbackfunc(val);
}

myFunc2(function(val){
    console.log(val);
});

myFunc2(val=> console.log("Again",val));

//dealing with forEach

let people = ['Benzema' , 'Vazquiz' , 'Vini Jr','Courtoius'];
//forEach take function as a parameter
people.forEach((person , index)=> console.log("Name",person,"Number",index));