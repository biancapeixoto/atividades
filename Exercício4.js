//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: • SP – R$67.836,43 • RJ – R$36.678,66 • MG – R$29.229,88 • ES – R$27.165,48 • Outros – R$19.849,53 Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.//

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let total = sp + rj + mg + es + outros;
console.log("Percentual SP: " + (sp * 100 / total).toFixed(2) + "%");
console.log("Percentual RJ: " + (rj * 100 / total).toFixed(2) + "%");
console.log("Percentual MG: " + (mg * 100 / total).toFixed(2) + "%");
console.log("Percentual ES: " + (es * 100 / total).toFixed(2) + "%");
console.log("Percentual Outros: " + (outros * 100 / total).toFixed(2) + "%");
