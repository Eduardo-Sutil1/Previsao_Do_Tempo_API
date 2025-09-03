const key = "";

function mostrandoDados(dados)
{
    console.log(dados)
    document.querySelector("#nome-cidade").innerHTML = dados.name
    document.querySelector("#temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector("#descricao-clima").innerHTML = dados.weather[0].description
    document.querySelector("#imagem-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade)
{
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())  

    mostrandoDados(dados)
}


function botaoBuscar()
{
    const cidade = document.getElementById('cidade-input').value;

    buscarCidade(cidade);
}