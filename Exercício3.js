//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: • O menor valor de faturamento ocorrido em um dia do mês; • O maior valor de faturamento ocorrido em um dia do mês; • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. IMPORTANTE: a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;//

let dados = require("./dados.json");
let menorValor = 0;
let maiorValor = 0;
let mediaValor = 0;
let quantidadeDiasMedia = 0;
for (let dia of dados) {
    if (dia.valor > maiorValor) {
        maiorValor = dia.valor;
    }

    if (dia.valor < menorValor || !menorValor) {
        menorValor = dia.valor;
    }

    if (dia.valor > 0) {
        mediaValor += dia.valor;
        quantidadeDiasMedia += 1;
    }
}

mediaValor = mediaValor / quantidadeDiasMedia;
console.log("Menor valor: " + menorValor);
console.log("Maior valor: " + maiorValor);
console.log("Valor médio: " + mediaValor);
let quantidadeDiasValorAcimaMedia = 0;
for (let dia of dados) {
    if (dia.valor > mediaValor) {
        quantidadeDiasValorAcimaMedia += 1;
    }
}

console.log("Quantidade de dias acima da média: " + quantidadeDiasValorAcimaMedia);