function ordemValores() {
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let valor = parseInt(prompt("Digite um valor inteiro: " ))
        numeros.push(valor);
    }

    numeros.sort(function(a, b) {
        return b - a;
    });

    alert("Ordem decrescente: " + numeros.join(", "));

}