const form = document.getElementById('form-comparison');

document.getElementById("nunA").addEventListener("keypress", function (e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

document.getElementById("nunB").addEventListener("keypress", function (e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valorA = document.getElementById("nunA");
    let valorB = document.getElementById("nunB");

    let msgSucesso = document.getElementById("msg-sucesso");
    let msgErro = document.getElementById("msg-erro");

    let msgInvalidoA = document.getElementById("campoA-invalido");
    let msgInvalidoB = document.getElementById("campoB-invalido");


    msgSucesso.style.display = "none";
    msgErro.style.display = "none";
    msgInvalidoA.style.display = "none";
    msgInvalidoB.style.display = "none";

    let erro = false;


    if (valorA.value.trim() === "") {
        msgInvalidoA.style.display = "block";
        erro = true;
    }

    if (valorB.value.trim() === "") {
        msgInvalidoB.style.display = "block";
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
