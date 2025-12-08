const prompt = require("prompt-sync")();
const fs = require('fs');

const loadDB = () => {
   try {
      const raw = fs.readFileSync("./db2.json", "utf8");
      console.log(raw);
   } catch (error) {
    console.log({ grupos:[] });
    return { grupos:[] }
   }
}
loadDB();