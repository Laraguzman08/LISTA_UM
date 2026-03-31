function transfNumero() {
    let numero = parseInt(prompt("Digite um número inteiro: "));

    if (numero % 2 == 0) {
        numero += 1;
        alert("O número era par, transformando-o em ímpar: " + numero);
    } else {
        numero -= 1;
        alert("O número era ímpar, transformando-o em par: " + numero);
    }
}