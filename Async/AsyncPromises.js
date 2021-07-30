const getTodos = (resource) => {
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>
    {

        if(request.readyState===4 && request.status===200) //4 means the request is complete .. for more exeplanation look at JS notes doc :)
        {
         //The response  request.responseText is just a string not JS Object
         //to convert it to JS object do the following line
         const data = JSON.parse(request.responseText);
        resolve(data);
        }else if (request.readyState===4)
        {
            reject('error getting data');
        }
    }
    );
    request.open('GET' , resource);
    request.send();
}
    );
};


//this is called Chaining 
//Only one catch catches any error
getTodos('todos/todo1.json').then( data =>{
     console.log("Promise 1 resolved",data);
     return getTodos('todos/todo2.json')
    }).then(data=>{
        console.log("Promise 2 resolved",data);
     return getTodos('todos/todo3.json')
    }).then(data => {
        console.log("Promise 3 resolved",data);
    }).catch(err=>console.log(err));