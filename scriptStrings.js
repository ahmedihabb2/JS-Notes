let namee = "Ahmed";
//console.log(namee.toUpperCase());  //Method or Function
//console.log(namee.length); //Property of string
//console.log(namee.lastIndexOf('e'));
let test = "Ana gamed problem solving";
let result = test.lastIndexOf('n'); //"Ana gamed problem solvi(n)g"
//console.log(result);
result = test.slice(0,3);  // takes start and end index
//console.log(result);
result = test.substr(0,3);  // takes start and num of chars (3 characters here)
//console.log(result);
result = test.replace('n','t'); //replace first n only
//console.log(result);

const blog = "The theory of Mangos";
const author = "Ihab Manga";
const likes = 69;

//Concatenation way
result = "The blog called " + blog + " by " + author + " has " + likes + " likes";
console.log(result);

//Template Sring
result = `The blog called ${blog} by ${author} has ${likes} likes`;
console.log(result);
console.log(test.includes('z'));