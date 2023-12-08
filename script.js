function meuCallBack(conteudo) {
    if (!("Erro" in conteudo)) {
        document.getElementById("logradouro").value=(conteudo.logradouro);
        document.getElementById("complemento").value=(conteudo.complemento);
        document.getElementById("bairro").value=(conteudo.bairro);
        document.getElementById("localidade").value=(conteudo.localidade);
        document.getElementById("uf").value=(conteudo.uf);
        document.getElementById("ibge").value=(conteudo.ibge);
    } else {
        limpar();
        window.alert("CEP inválido")
    }
}

function limpar() {
    document.getElementById("cep").value("");
    document.getElementById("logradouro").value=("");
    document.getElementById("complemento").value=("");
    document.getElementById("bairro").value=("");
    document.getElementById("localidade").value=("");
    document.getElementById("uf").value=("");
    document.getElementById("ibge").value=("");
}

function procurarEnderecoCep() {
    var cep = document.getElementById("cep").value.replace(/\D/g, '');

    var validarCep = /^[0-9]{8}$/;

    if (cep == "") {
        limpar();
        window.alert("Digite o seu CEP pra poder continuar!!!")
    }
    else {
        if (validarCep.test(cep)) {
            document.getElementById("logradouro").value="...";
            document.getElementById("complemento").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("localidade").value="...";
            document.getElementById("uf").value="...";
            document.getElementById("ibge").value="...";

            var script = document.createElement("script");

            script.src = "https://viacep.com.br/ws/"+ cep +"/json/?callback=meuCallBack";

            document.body.appendChild(script);
        } else {
            limpar();
            window.alert("CEP inválido!!!")
        }
    }
}