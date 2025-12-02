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

 function saveDB(db) {
    try {
        fs.writeFileSync("./bd.json", JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar bd.json:', err.message);
        return false;
    }
 }


//  db["usuarios"][1]["nome"] = "Isabela"; // atualiza
//  db["usuarios"].push({"id": 3, "nome": "Isaque"}); // adiciona
 saveDB(db)

 db["pontosBicicleta"][1]["bicicletas"].push({"id": 30, "tipo":"eletrica", "valor": 1.0});
 saveDB(db)