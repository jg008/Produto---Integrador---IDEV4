const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require ('path');

console.log("pontos_bicicletas"[0][2]["valor"])

try {
   const idade= number(prompt("DIgite sua idade:"))
    console.log(teste)
} catch (error) {
    console.log('error')
    console.log ('ola mundo')
}


 while(true){
    const escolha = prompt('0: Sair       Escolha uma opção do Menu');
    if (escolha == "0"){
        break;
    }else{
       console.clear()
       continue;
    }
 }

 function cadastrarUsuario (nome) {

 }

 function load02(){
    try{
        const raw = fs.readFileSync("/bd.json",'utf8');
        return JSON.parse(raw);
    }catch(err){
        console.error('Erro ao ler bd.json', err.message)
   return {
    nome_praça:'',
    pontos_bicicleta: [],
    usuarios:[],
    corridas:[]
   }
   function save08(db){
    try{
        fs.writeFileSync(dbPath, JSON.stringify(db.null,4),'utf8');
        return true;
    }catch(err){
        console.error('Error ao salvar  bd.json:',err.message);
        return false;
    }
    function getNextId(nome) {
        const db = load02();

        const values = db.name || [];

        let maxID = 0;
        for (let i = 0; i < usuarios.length; i++) {
            const u = usuarios[i];
            if( typeof u.id == 'number' && u.id > maxID) {
                maxID = U.id;
            }
        }
        const newId = maxID !== 0 ? maxID + 1 : i; // if ternario
   }
   }
}
 }
