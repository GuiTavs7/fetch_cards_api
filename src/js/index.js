// 1) Atribuindo à variável "url" o endpoint (endereço url) da API em formato de string (envolto em aspas)

 async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url);
    return await resposta.json();
}

criarBaralhoEmbaralhado();

// 2) Criando a função para tirar uma carta do baralho!

// Vamos usar a interpolação de strings para passar o parâmetro do id do deck na url

async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url);
    return await resposta.json();
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarUmaCarta(baralho.deck_id);
    console.log(carta);
    const imagemCarta = carta.cards[0].image;
    document.getElementById("carta").src = imagemCarta;
}

tirarUmaCartaAleatoriaDoBaralho();

// 3) Primeiramente aparecerá o "console.log" da linha 31, pois as funções assíncronas aguardam a busca de dados na API !

console.log("Segue o fluxo assincronamente sem esperar!");

// 4) Botão para tirar carta aleatória do baralho

document.getElementById("tirar_carta").addEventListener("click", () => {
    tirarUmaCartaAleatoriaDoBaralho();
})