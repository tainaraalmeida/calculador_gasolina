
function calculoEtanol(){

const gasolina = parseFloat(document.getElementById('precoGasolina').value);
const alcool = parseFloat(document.getElementById('precoAlcool').value);
const resultado = parseFloat(alcool / gasolina);


if(resultado < 0.7){
    document.getElementById('resultado').innerHTML = resultado;
}else{
    document.getElementById('resultado').innerHTML ='PERMANEÇA ABASTECENDO COM GASOLINA';
}

}
