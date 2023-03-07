const json = require('../universes.json')
const fs = require("fs");


 var universes = [];
for(let key in json){
    let obj = {
        name:key,
        sets:json[key]
    }
    universes.push(obj)
} 

/* console.log(universes) */


