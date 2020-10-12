// Importando as bibliotecas
const axios = require('axios');
const readline = require('readline');
// Configurando o readline
const rl = readline.createInterface({
  input: process.stdin, // entrada de dados padrão
  output: process.stdout // saída de dados padrão
});
// Interação com usuário
rl.question('DIGITE O CEP: ', (answer) => {
  console.log(`O CEP digitado foi: ${answer} \n`);
  //Realizando a requisição na API e imprimindo o resultado no console 
  axios.get('https://viacep.com.br/ws/'+answer+'/json/').then(res =>{
        console.log("Logradouro: " + res.data.logradouro);
        console.log("Complemento: " + res.data.complemento);
        console.log("Bairro: " + res.data.bairro);
        console.log("Localidade: " + res.data.localidade);
        console.log("UF: " + res.data.uf);
      });
  rl.close();
});