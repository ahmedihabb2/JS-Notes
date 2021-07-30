const para = document.querySelector('p')  //Graps the first p tag and igonre the others
const para2 = document.querySelector('.error') //get the fist class error
const para3 = document.querySelector('div.error');// get the div with class error
const para4 = document.querySelector('#content > p:nth-child(2)');
const paras = document.querySelectorAll('p'); //get all p tags in array  this returns ***node list*** and we can use forEach

//get element by ID
const elmn = document.getElementById('title-id');

//get elements by class Name

const classes = document.getElementsByClassName('error');  //returns HTML Collection so i can't use forEach method

//get element by tag name
const tags = document.getElementsByTagName('p');

/*
console.log(para.outerHTML);
console.log(para2.outerHTML);
console.log(para3.outerHTML);
console.log(para4.outerHTML);
console.log(paras);

console.log(elmn.outerHTML);
console.log(classes);
console.log(tags[1].outerHTML);
*/


//change the content of first paragraph from Hello , manga to tamer hosny

//para.innerHTML = "Tamer Hosny";

//change all p tags text

/*paras.forEach( par=>{
   console.log(par.innerText);
   par.innerText += " 3enaba"; 
});*/

//change or update the HTML Code inside tag
//difference between innerText and textContent is that textContent get the hidden text also
const content = document.querySelector(".content");

content.innerHTML += '<h2>New text Appended</h2>';

//get and set attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','www.github.com');
link.setAttribute('style','color:green;'); //we can set attributes that does not exist also
//Note : when we set style property it totslly overrides the current one so if there is a color and i want to put margin
//using setAttribute  it deletes the colors property
//So we will use :
console.log(para.style.color);
para.style.margin = '50px'; //to remove it we assign to it empty string


//get all classes 

console.log(para.classList);
//add a class
para.classList.add('3enab');
//remove a class
//para.classList.remove('...');


//Get all p tages and add class error to the one that have an error word or success if it has it

paras.forEach(para => {
    if(para.innerText.includes('error'))
    {
        para.classList.add('error');
    }
    else if(para.innerText.includes('success'))
    {
        para.classList.add('success');
    }
});




