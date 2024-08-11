type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero){
    console.log("Ligando para: " + heroi.telefone);
}

// function ligarPara(heroi: Hero): string{      // Outra forma de garantir que vai ser uma string
//  return "Ligando para: " + heroi.telefone;
// }

ligarPara({
    nome: "Gustavo Martins",
    vulgo: "Capitão América",
    telefone: "83 991088411", // Se retiramos a definição do telefone ele vai dar erro em tempo de desenvolvimento
})