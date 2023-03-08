const jsonSkins = require("./skinsJS.json")
const fs = require("fs");



var skins = [];
for (let champion in jsonSkins) {
    
    for (let key in jsonSkins[champion]["skins"]) {
        let championName = jsonSkins[champion].name;
        let newName = '';

        if(championName ==  "Nunu &amp; Willump"){
            championName = "Nunu_Willump"
        }

        if(key == 'Original'){
            newName = championName
        }else{
            newName = `${key} ${championName}`
        }

        let obj = {
            name: newName,
            champion: championName,
            imgUrl: nameFormatter(newName,championName),
            set: jsonSkins[champion]["skins"][key]['set'],
            lore: jsonSkins[champion]["skins"][key]['lore'],
            release: jsonSkins[champion]["skins"][key]['release']
        }
        skins.push(obj)
    }
}

const sort = skins.sort(function(a, b) {
    return a.champion.localeCompare(b.champion);
 });


fs.writeFile('resultSkins.json', JSON.stringify(sort), function (err, result) {
    if (err) console.log("error", err)
})

function nameFormatter(str,champion) {
    var replaced = str.replace(/ /g, "_").replace(/'/g,"_");
    var newString = `splash_art/${champion}/${replaced}`
    return newString
  }