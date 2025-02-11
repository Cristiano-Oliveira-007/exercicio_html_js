const form = document.getElementById('form-comparison');
const valorA = document.getElementById("nunA");
const valorB = document.getElementById("nunB");
const msgSucesso = document.getElementById("msg-sucesso");
const msgErro = document.getElementById("msg-erro");
const msgInvalidoA = document.getElementById("campoA-invalido");
const msgInvalidoB = document.getElementById("campoB-invalido");

// 🔹 Função para remover erro quando o usuário digita algo
function removerErro(input, msgErro) {
    input.style.border = "2px solid transparent"; // Remove a borda vermelha
    msgErro.style.display = "none"; // Esconde a mensagem de erro
}

[valorA, valorB].forEach(input => {
    input.addEventListener("input", function () {
        if (input === valorA) removerErro(valorA, msgInvalidoA);
        if (input === valorB) removerErro(valorB, msgInvalidoB);
    });
});

[valorA, valorB].forEach(input => {
    input.addEventListener("keypress", function (e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    msgSucesso.style.display = "none";
    msgErro.style.display = "none";

    let erro = false;

    if (valorA.value.trim() === "") {
        msgInvalidoA.style.display = "block";  
        valorA.style.border = "2px solid red"; 
        erro = true;
    }

    if (valorB.value.trim() === "") {
        msgInvalidoB.style.display = "block";  
        valorB.style.border = "2px solid red"; 
        erro = true;
    }

    if (erro) return; 

    let numA = parseFloat(valorA.value);
    let numB = parseFloat(valorB.value);

    if (isNaN(numA) || isNaN(numB)) {
        msgErro.textContent = "Por favor, preencha os dois campos com números válidos.";
        msgErro.style.display = "block";
        return;
    }

    msgSucesso.style.display = "block";

    if (numB > numA) {
        msgSucesso.textContent = `O número ${numB} é maior que o número ${numA}.`;
    } else if (numB === numA) {
        msgSucesso.textContent = `Os números são iguais: ${numA}.`;
    } else {
        msgSucesso.textContent = `O número ${numB} não é maior que o número ${numA}.`;
    }
    valorA.value = "";
    valorB.value = "";
});
