const prompt = require("prompt-sync")();
const fs = require('fs');

function loadDB() {
    try {
      const raw = fs.readFileSync("./bd2.json", 'utf8');
      return JSON.parse(raw);
    } catch (err) {
      console.error('Erro ao ler bd.json:', err.message);
      return {
        nome: "",
        nome_integrantes: [],
        nome_praça: "",
        lista_materias: []
      };
    }
  }