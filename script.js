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

    let valorA = parseFloat(document.getElementById("nunA").value);
    let valorB = parseFloat(document.getElementById("nunB").value);
    
    let msgSucesso = document.getElementById("msg-sucesso");
    let msgErro = document.getElementById("msg-erro");

    msgSucesso.style.display = "none";
    msgErro.style.display = "none";


    if (isNaN(valorA) || isNaN(valorB)) {
        msgErro.textContent = "Por favor, preencha os dois campos com números válidos.";
        msgErro.style.display = "block";
        return;
    }


    msgSucesso.style.display = "block";


    if (valorB > valorA) {
        msgSucesso.textContent = `O número ${valorB} é maior que o número ${valorA}.`;
    } else if (valorB === valorA) {
        msgSucesso.textContent = `Os números são iguais: ${valorA}.`;
    } else {
        msgSucesso.textContent = `O número ${valorB} não é maior que o número ${valorA}.`;
    }


    document.getElementById("nunA").value = "";
    document.getElementById("nunB").value = "";
});
