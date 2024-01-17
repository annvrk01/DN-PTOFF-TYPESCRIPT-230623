import {Promise} from 'es6-promise'
let promise : Promise<string>  = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("do sthing")
    }, 3000);
})

promise.then((data)=> {
    let str = data.split(" ").join("").toUpperCase();
})

