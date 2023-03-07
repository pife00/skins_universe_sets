const jsonSkins = require("./skinsJS.json")
const fs = require("fs");



var skins = [];
for (let champion in jsonSkins) {
    
    for (let key in jsonSkins[champion]["skins"]) {
        let championName = jsonSkins[champion].name;
        let newName = `${key} ${championName}`
        
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
fs.writeFile('resultSkins.json', JSON.stringify(skins), function (err, result) {
    if (err) console.log("error", err)
})

function nameFormatter(str,champion) {
    var replaced = str.replace(/ /g, "_").replace(/'/g,"_");
    var newString = `splash_art/${champion}/${replaced}`
    return newString
  }