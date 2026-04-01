function descontoVariavel() {
    let salario = parseFloat(prompt("Informe o salário bruto do funcionário: "));
    let x;

    if (salario <= 1000) {
        x = 8;
    } else if (salario > 1000 && salario <= 1500) {
        x = 8.5;
    } else if (salario > 1500) {
        x = 9;
    }

    let desconto = (x / 100) * salario;
    let liquido = salario - desconto;

    alert("Salário informado: " + salario);
    alert("Taxa de desconto aplicada: " + x, "%");
    alert("Valor do desconto: " + desconto);
    alert("Salário líquido: " + liquido);
}