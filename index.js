const prompt = require("prompt-sync")();
const fs = require('fs');

// while (true) {
// const escolha = prompt(`
// 0: sair

// Escolha uma opçõa do menu
// `);

// if (escolha == "0") {
//     break
// } else {
//     continue;
// }
// }

function loadDB() {
  try {
    const raw = fs.readFileSync("./bd.json", 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Erro ao ler bd.json:', err.message);
    return {
      nome_praça: '',
      pontos_bicicletas: [],
      usuarios: [],
      corridas: []
    };
  }
}

let db = loadDB();
console.log(db["usuarios"][0]["nome"]);

 // console.log(db["corridas"][0]["inicio"]);
 // console.log(db["pontos_bicicleta"][1]["bicicletas"]);
 // console.log(db["pontos_bicicleta"][2]["bicicletas"][3]["tipo"]);