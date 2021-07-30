//instead all code we have done in prev 2 files async.js && AsyncPromises.js
//There is a fetch method that do all the job with promises

/*fetch('todos/todo1.json').then( data => {
    console.log(data);
    return data.json();  //it return a promise
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));
*/

//**Note** : here promise rejected only if there is network error
//but if you missed spelling of url you will still get resolved but with status code 404 for ex
//So we have to check the status code manually
//Doing above code using Async await
//Any async function return a promise
const getTodos = async()=>{
    const resp=await fetch('todos/todo1.json');
    const data = await resp.json();
    const resp2=await fetch('todos/todo2.json');
    const data2 = await resp2.json();
    const resp3=await fetch('todos/todo3.json');
    const data3 = await resp3.json();
    return data
}
//non-blocking .then  
console.log(1);
console.log(2);
getTodos()
    .then(data => console.log(data))
    .catch(err=>console.log(err))
    ;  
console.log(3);
console.log(4);