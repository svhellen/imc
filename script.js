
/*
function getGender(x) {
    let gender;
    if (x == 'btn-gender-f') {
        // Obtém o elemento do botão de rádio selecionado
        var selectedRadioButton = document.querySelector('input[name="fgender"]:checked');

        // Verifica se há um botão selecionado
        if (selectedRadioButton) {
        // Obtém o valor do botão selecionado
        var selectedValue = selectedRadioButton.value;

        // Use o valor selecionado como desejar
       
        }
    }
    alert(selectedValue);
}



        // Obtém o elemento do botão de rádio selecionado
        var selectedRadioButton = document.querySelector('input[name="option"]:checked');

        // Verifica se há um botão selecionado
        if (selectedRadioButton) {
        // Obtém o valor do botão selecionado
        var selectedValue = selectedRadioButton.id;

        // Use o valor selecionado como desejar
        alert(selectedValue);
        }*/
        
let res = document.getElementById('res');
let idade;
let altura;
let peso;
let imc;
let classif;
let ind;

function validar() {
    idade = Number(document.getElementById('fidade').value);
    altura = Number(document.getElementById('faltura').value)/100;
    peso = Number(document.getElementById('fpeso').value);
    if(idade === "" || altura === "" || peso === "") {
        alert("Preencha todos os campos.");
        return;
        //escrever msg direto no html
    }
    if(isNaN(idade) || isNaN(altura) || isNaN(peso)) {
        alert("Valor inválido.");
        return;
        //escrever msg direto no html
    }
    if(idade <= 0 || altura <= 0 || peso <= 0) {
        alert("Valor inválido.");
        return;
        //escrever msg direto no html
    }

     // Os inputs são válidos, continuar com o cálculo do IMC e exibir o resultado
    calcular();
}

function calcular() {
    imc = (peso / (altura * altura)).toFixed(1);
    let pesoMin = (18.5 * altura * altura).toFixed(1);
    let pesoMax = (24.9 * altura * altura).toFixed(1);

    alert(` Idade: ${idade}
            Altura: ${altura}
            Peso: ${peso} 
            IMC: ${imc} 
            Peso minimo: ${pesoMin}
            Peso maximo: ${pesoMax} `);

    let keyWord;

    if (imc > 30) {
        ind = document.getElementById('obes');
        ind.style.backgroundColor = 'yellow';
        classif = `está acima do recomendado`;
        keyWord = `atingir`;
    }else if (imc > 24.9){
        ind = document.getElementById('sobr');
        ind.style.backgroundColor = 'yellow';
        classif = `está acima do recomendado`;
        keyWord = `atingir`;
    }else if (imc >= 18.5){
        ind = document.getElementById('norm');
        ind.style.backgroundColor = 'green';
        classif = `é considerado normal`;
        keyWord = `manter`;
    }else {
        ind = document.getElementById('magr');
        ind.style.backgroundColor = 'yellow';
        classif = "está abaixo do recomendado";
        keyWord = `atingir`;
    }
    exibirNaTela(imc, classif, keyWord, pesoMin, pesoMax);

}

function exibirNaTela(imc, classif, keyWord, pesoMin, pesoMax) {
    res.innerHTML = `<h2>Resultado</h2>
        <p>Seu IMC é de <strong>${imc} kg/m2</strong></p>
        <p>De acordo com a Organização Mundial da Saúde, seu IMC ${classif} para a sua altura. Para ${keyWord} um valor de IMC normal, seu peso deve variar entre <strong>${pesoMin} e ${pesoMax} kg</strong>.</p>`;
}