const json = require('./universes.json')
const fs = require("fs");


var universes = [];
for(let key in json){
    let obj = {
        name:key,
        sets:json[key]
    }
    universes.push(obj)
} 

fs.writeFile('resultUniverse.json', JSON.stringify(universes), function (err, result) {
    if (err) console.log("error", err)
})


/* console.log(universes) */


