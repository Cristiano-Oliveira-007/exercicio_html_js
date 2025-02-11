const form = document.getElementById('form-comparison');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let valorA = parseFloat(document.getElementById("nunA").value);
    let valorB = parseFloat(document.getElementById("nunB").value);


    if (isNaN(valorA) || isNaN(valorB)) {
        alert("Por favor, preencha os dois campos com números válidos.");
        return;
    }


    if (valorB > valorA) {
        alert(`O número ${valorB} é maior que o número ${valorA}`);
    } else if (valorB === valorA) {
        alert(`O número ${valorB} é igual ao número ${valorA}`);
    } else {
        alert(`O número ${valorB} não é maior que o número ${valorA}`);
    }


    document.getElementById("nunA").value = "";
    document.getElementById("nunB").value = "";
});
