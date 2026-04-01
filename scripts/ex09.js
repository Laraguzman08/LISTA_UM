function ordemDoisNumeros() {
    let valor1 = 1;
    let valor2 = 2;
    let valores = [valor1, valor2];

    valores.sort(function(a, b) {
        return b - a;
    });
    console.log("Dois valores do maior para o menor: " + valores);
}