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
loadDB();