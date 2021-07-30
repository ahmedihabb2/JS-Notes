//Object literals
//this represents the context in which the code executed
//arrow functions does not work with this keyword
let user = {
    name : 'Ahmed Ihab',
    age  : 20 ,
    email : 'ahmedbaz14@gmail.com',
    location: 'Giza',
    series : [
        {title : 'GOT' , likes: 69},
        {title: 'PB' , likes : 55}
    ],  //Array of objectss
    login : () => console.log("User logged in"),
    getSeries (){
       this.series.forEach(element =>{
           console.log(element.title , element.likes);
       })
    }
};

console.log(user);
console.log(user.name);
console.log(user['age']);
user.age = 25;
console.log(user.age);
user.login();
user.getSeries();

//calling this here will refare to window object (global)


//Math Object 

console.log(Math);
//random num between 0 and  1
console.log(Math.random());
//between 1 and 100
console.log(Math.round(Math.random() * 100));