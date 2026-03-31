function precosPicole() {
    let codigo = prompt("Insira o código do sabor do picolé: ");
    codigo = codigo.toLowerCase();

    switch (codigo) {
        case "a":
            alert("O sabor escolhido é chocolate, e o preço é R$1,50.");
            break;
        case "b":
            alert("O sabor escolhido é morango, e o preço é R$2,50.");
            break;
        case "c":
            alert("O sabor escolhido é creme, e o preço é R$2,50.");
            break;
        case "d":
            alert("O sabor escolhido é manga, e o preço é R$3,20.");
            break;
        case "e":
            alert("O sabor escolhido é melancia, e o preço é R$3,40.");
            break;
        case "f":
            alert("O sabor escolhido é vanilla ice, e o preço é R$23,00.");
            break;
        case "g":
            alert("O sabor escolhido é céu azul, e o preço é R$3,60.");
            break;
        case "h":
            alert("O sabor escolhido é brownie, e o preço é R$4,00.");
            break;
        case "i":
            alert("O sabor escolhido é hawaiano, e o preço é R$5,00.");
            break;
    }
}