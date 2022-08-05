const fs = require("fs");
const path = require("path");

//criar uma pasta
/*
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro", error);
  }

  console.log("Pasta criada com sucesso !");
});
*/

//Criar um arquivo

fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro", error);
    }

    console.log("Arquivo criado com sucesso !");
  }
);

//Adicionar conteudo ao arquivo - COMENTADO
fs.appendFile(
  //função para adicionar conteudo ao arquivo
  path.join(__dirname, "/test", "teste.txt"), //metodo que adiciona o conteudo
  //primeiro PAR = diretorio
  //segundo PAR = pasta
  //terceiro PAR = nome do arquivo
  "Hello world!", //quarto PAR, fica fora dos () = texto que sera adicionado
  //quinto PAR = função para retornar erro
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo modificado com sucesso");
  }
);
//Ler um arquivo
fs.readFile(
  path.join(__dirname, "/test", "teste.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log(data);
  }
);
