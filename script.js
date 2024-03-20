function encurtarUrl() {
    // validar se o link existe
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }

    //api key: 23f802b62dcb40638358184fab2a6dce

    //encurtar o link (configuração do cabeçalho da requisição)

    //headers significa pedir para a api encurtar o link
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "23f802b62dcb40638358184fab2a6dce"
    }

    //dados da requisição
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }


    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function Copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada: ${inputUrl.value}`)
}
