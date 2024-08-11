function ligar (heroi) {
    console.log("Ligando para:" + heroi.telefone);
}

ligar({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: "83 991088411", // Se retiramos a definição do telefone ele nao vai dar erro e exibirá undefined
});