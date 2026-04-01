function folhaPagamento() {
    let nome = prompt("Informe o nome do funcionário: ");
    let salario = parseFloat(prompt("Informe o salário bruto: "));
    let desconto = (8 / 100) * salario;
    let liquido = salario - desconto;

    alert("Nome do funcionário: " + nome);
    alert("Salário bruto: " + salario);
    alert("Valor do desconto do INSS: " + desconto);
    alert("Salário líquido: " + liquido);
}