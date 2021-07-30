/*console.log(1);
console.log(2);

//Async Function , so it does not block the rest of the code
setTimeout(()=>{
    console.log("Callback function is fired");
},2000);

console.log(3);
console.log(4);
console.log(5);*/



/*
    Readystate only represents the state of the request until it done 
    but if the endpoint was not valid you will not know it still reaches the all stages
    so we need status code to know
*/
// TO know more about status codes visit https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
/*
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>
{

    if(request.readyState===4 && request.status===200) //4 means the request is complete .. for more exeplanation look at JS notes doc :)
    {
        console.log(request.responseText);
    }else if (request.readyState===4)
    {
        console.log("Could not fetch the data");
    }
}
);

request.open('GET' , 'https://jsonplaceholder.typicode.com/todos');
request.send();

*/

//Turning the above code into callback function

const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>
    {

        if(request.readyState===4 && request.status===200) //4 means the request is complete .. for more exeplanation look at JS notes doc :)
        {
         //The response  request.responseText is just a string not JS Object
         //to convert it to JS object do the following line
         const data = JSON.parse(request.responseText);
        callback(undefined , data);
        }else if (request.readyState===4)
        {
            callback('Could not fetch the data' , undefined);
        }
    }
);

request.open('GET' , resource);
request.send();
};

//It is non-blocking function (Async function)
//this is called callback hell (not good) (nesting callbacks)
getTodos('todos/todo1.json',(err, data)=>{
    console.log(data);
    getTodos('todos/todo2.json',(err, data)=>{
        console.log(data);}
        );
        getTodos('todos/todo3.json',(err, data)=>{
            console.log(data);}
            );
});

//Doing the above code using promises
//Promise has two outcomes :
// 1 - Resolved -> we got the data we want
// 2 - Rejected -> we couldn't get the data


//First Dummy example

/*const doSomething = ()=> {

    return new Promise((resolve,reject)=>{
        //fetching some data
        //resolve('some data');  fires then function
        reject('errooooor'); //fires catch function
    });
};


doSomething().then((data)=>{
    console.log(data);
}).catch(err => console.log(err));
*/
