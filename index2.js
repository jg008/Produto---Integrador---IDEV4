const prompt = require("prompt-sync")();
const fs = require('fs');

const loadDB = () => {
   try {
      let raw = fs.readFileSync("./db2.json", "utf8");
      return JSON.parse(raw);
   } catch (error) {
    return { grupos:[] }
   }
}
let db = loadDB();

function saveDB(db) {
    try {
        fs.writeFileSync("./bd2.json", JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar bd.json:', err.message);
        return false;
    }
 }
 
 db["grupos"][1]["nome"] = "O Melhor Foguete"; 
 
 saveDB(db)