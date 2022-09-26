const txtPalavra = document.getElementById("txtPalavra");
const salvarPalavra = document.getElementById("salvarPalavra");
let palavraDigitada = "";

salvarPalavra.addEventListener("click", adicionaPalavra);

function adicionaPalavra() {
    let arrayLocalStorage = JSON.parse(localStorage.getItem("palavras"));
    palavraDigitada = txtPalavra.value.toUpperCase();
    console.log(arrayLocalStorage)
    if (!arrayLocalStorage.includes(palavraDigitada)){
    arrayLocalStorage.push(palavraDigitada);
    localStorage.setItem("palavras", JSON.stringify(arrayLocalStorage));
    txtPalavra.value = "";
    } else{
        txtPalavra.value = "Esta palavra já existe!!!";
    }

    console.log(localStorage)
}