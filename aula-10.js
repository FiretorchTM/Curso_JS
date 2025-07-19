/*const horasViagem = prompt("digite as horas de viagem: ");
const kmh = prompt("insira a velocidade media (km/h):");
const distanciaPercorrida = horasViagem * kmh;
const litrosGastos = distanciaPercorrida / 12;

console.log("você precisará de:", litrosGastos.toFixed(3), "litros para fazer a viagem.");
*/

    //formula
    const consumoAutomovel = 12;
    function litrosFormula(horasViagem, kmh)
    {
        //const distancia = horasVagem * kmh;
        //const consumoF = distancia/consumoAutomovel;
        //return consumoF.toFixed(3);
        return horasViagem * kmh / consumoAutomovel;
    }
    //pedir ao usuario e mostrar no ecra, obs: só funciona na web por causa do "prompt"
    const horasUsuario = Number(prompt("Digite as horas de viagem:"));
    const kmHoraUsuario = Number(prompt("Digite os Km/h:"));
    const litrosGastos = litrosFormula(horasUsuario, kmHoraUsuario);// horasViagem recebe: horasUsuario // kmh recebe: kmHoraUsuario
    if(horasUsuario < 8){
    
    console.log("Litros necessários para realizar a viagem:", litrosGastos.toFixed(3), "para essa viagem");
    }
    else{
    console.log("Litros necessários para realizar a viagem:", litrosGastos.toFixed(3), "para essa viagem");
    console.log("Faça algumas pausas para dormir pois a viagem é muito longa!")
    }

//litros gastos na viagem
//automovel faz 12km litro
//tempo gasto da viagem em horas
//velocidade media em kilometro por hora
//assim obter distancia percorrida 
//em seguida calcular os litros necessarios 
//valor com 3 casas decimais apos o ponto