function financeiro() {
    let brutoAnual = 0;
    let gastosAnual = 0;
    for(let i = 1; i <= 12; i++) {
        let bruto = parseFloat(prompt("Informe o ganho bruto do mês: "));
        let gastos = parseFloat(prompt("Informe os gastos do mês: " ));
        brutoAnual += bruto;
        gastosAnual += gastos;
    }
    let saldoAnual = brutoAnual - gastosAnual;
    alert("Ganho bruto anual: " + brutoAnual); 
    alert("Gasto anual: " + gastosAnual);
    alert("Saldo financeiro anual: " + saldoAnual);
    
    if (saldoAnual > 0) {
        alert("O seu lucro foi de: " + saldoAnual);
    } else { 
        alert("O seu prejuízo foi de: " + saldoAnual);
    }
}