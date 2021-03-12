function calcular() {
    let nome = document.getElementById('nomeTxt').value
    let salario = Number(document.getElementById('salTxt').value)
    let quantidade = Number(document.getElementById('qtdTxt').value)
    let res = document.getElementById('res')

    switch (quantidade) {
        case 0: res.innerHTML = `O novo salario de ${nome} é:  ${salario + ((salario * 5) / 100)}`;
            break;
        case 1: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 10) / 100)}`;
            break;
        case 2: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 10) / 100)}`;
            break;
        case 3: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 10) / 100)}`;
            break;
        case 4: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 15) / 100)}`;
            break;
        case 5: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 15) / 100)}`;
            break;
        case 6: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 15) / 100)}`;
            break;
        default: res.innerHTML = `O novo salario de ${nome} é: ${salario + ((salario * 18) / 100)}`;
            break;

    }



}