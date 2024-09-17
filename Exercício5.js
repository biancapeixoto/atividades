//5) Escreva um programa que inverta os caracteres de um string. IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse;//

function inverterTexto(texto) {
    let caracteres = texto.split("");
    let resultado = "";
    for (let indice = caracteres.length - 1; indice >= 0; indice -= 1) {
        resultado += caracteres[indice];
    }

    return resultado;
}

let texto = "essa frase precisa ser invertida";
console.log(inverterTexto(texto));