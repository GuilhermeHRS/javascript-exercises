function gerarTabuada(){
    let campoNumero = document.querySelector("#campo-numero");
    let select = document.querySelector("#select");

    if(campoNumero.value === 0){
        window.alert("Digite um número válido!");
    } else {
        campoNumero = Number(campoNumero.value);
        
        select.innerHTML = ""

        let optionTitle= document.createElement("optgroup");
        optionTitle.label = `Tabuada do ${campoNumero}:`;
        select.appendChild(optionTitle);

        for(c = 1; c <= 10; c++){
            let option = document.createElement("option");
            option.text = `${campoNumero} X ${c} = ${campoNumero*c}`;
            select.appendChild(option);
            
        }
    }
}