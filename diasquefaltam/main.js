const dataAtual = new Date();
let diasQueFaltam = calculaDias();
document.querySelector("#dias_restantes").textContent = diasQueFaltam+" dias";

while (diasQueFaltam < 0){
    alert("A data informada é menor que a data atual, atualize a página e informe uma nova data");
    diasQueFaltam = calculaDias();
}

function calculaDias(){
    let dataOjetivo = prompt("Digite a data Final (formato ANO-MêS-DIA, exemplo: 2024-10-20)");
    dataOjetivo = new Date(dataOjetivo+"T23:59:59");
    return Math.floor((dataOjetivo - dataAtual)/86400000);
}