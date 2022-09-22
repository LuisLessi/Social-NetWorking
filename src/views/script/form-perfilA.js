
var btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", function (event) {
    event.preventDefault();

    var frmAluno = document.querySelector("#perfilA");
    console.log(frmAluno.tel.value);
    console.log(frmAluno.celular.value);
    console.log(frmAluno.nome.value);
    console.log(frmAluno.email.value);
    console.log(frmAluno.linkedin.value);
    console.log(frmAluno.sites.value);
    console.log(frmAluno.bairro.value);
    console.log(frmAluno.cidade.value);

})


