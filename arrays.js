let manga = ['Amr' , 'Diab',2];
console.log(manga);
console.log(manga[1]);
console.log(manga[2]);
//Override
manga[1]= 'Ihab';
console.log(manga[1]);
//Properties
console.log(manga.length);
//Methods
let result = manga.join('|');   //Join all elements with | between them
console.log(result);
result = manga.join(" ");
console.log(result);


result = manga.indexOf(2);
console.log(result);


//Join two arrays togther
result = manga.concat(['Sayed' , 'Sayeda']);
console.log(result);
console.log(manga);

manga.push("Hamada");  //Changes the original array
console.log(manga);
manga.pop();  //Changes the original array
console.log(manga);

//check existence of element
console.log(manga.includes('kaka'));