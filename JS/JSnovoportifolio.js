function btn_form() {
    var nome = document.getElementById("nome").value;
    var datanasc = document.getElementById("datanasc").value;
    var email = document.getElementById("email").value;
    var genero = document.getElementById("genero").value;
    var telefone = document.getElementById("telefone").value;
    var estadocivil = document.getElementById("estadocivil").value;
    var mensagem = document.getElementById("mensagem").value;

    var mensagensErro = [];

    if (nome === "") {
        mensagensErro.push("Preencha o seu Nome Completo.");
    }

    if (datanasc === "") {
        mensagensErro.push("Preencha a sua Data de Nascimento.");
    }

    if (email === "") {
        mensagensErro.push("Preencha o seu Email.");
    }

    if (genero === "") {
        mensagensErro.push("Preencha o seu Sexo.");
    }

    if (telefone === "") {
        mensagensErro.push("Preencha o seu Telefone.");
    }

    if (estadocivil === "") {
        mensagensErro.push("Preencha seu Estado Civil.");
    }

    if (mensagem === "") {
        mensagensErro.push("Preencha a sua Mensagem.");
    }

    if (mensagensErro.length > 0) {
        alert(mensagensErro.join("\n"));
        return false;
    } else {
        alert("Formulário enviado. Retornaremos em até 48h úteis.");
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const estadosCivis = [
        '',
        'Solteiro(a)',
        'Casado(a)',
        'Divorciado(a)',
        'Viúvo(a)',
    ];

    const selectEstadoCivil = document.getElementById('estadocivil');

    estadosCivis.forEach(function (estadoCivil) {
        const option = document.createElement('option');
        option.value = estadoCivil;
        option.text = estadoCivil;
        selectEstadoCivil.appendChild(option);
    });
});
