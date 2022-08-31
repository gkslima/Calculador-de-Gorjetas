function calculateTip(event){
    event.preventDefault(); /* para de recarregar a página quando aperta o botão calcular */
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    /* se bill for nulo ou service for igual a 0 */
    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores.")
        return;
    }

    /* número de pessoas nulo ou menor/igual a 1 */
    if(people == "" | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else{
        document.getElementById('each').style.display = "block";
    }

    /* calcular a gorjeta */
    let total = (bill * serviceQual) / numOfPeople;
    /* fixar somente 2 casas depois da vírgula */
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    /* exibir o total */
    document.getElementById('totalTip').style.display = "block"
}

/* desaparece enquanto não é usado */
document.getElementById('totalTip').style.display = "none"; 
document.getElementById('each').style.display = "none";

/* chama a função */
document.getElementById('tipsForm').addEventListener('submit', calculateTip);
