function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
     
    if ((usuario.length >=1) &&
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    /*document.getElementById("msgemail").innerHTML="E-mail válido";*/
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
}

function validacaoNome(name){
    if((name.value.length >= 2) &&
    (name.value.search(".") == -1)&&
    (name.value.search("*") == -1)&&
    (name.value.search("/") == -1)&&
    (name.value.search("-") == -1)&&
    (name.value.search("+") == -1)&&
    (name.value.search("-") == -1)&&
    (name.value.search("!") == -1)&&
    (name.value.search("$") == -1)&&
    (name.value.search("#") == -1)){
        /*document.getElementById("msgte").innerHTML="Nome inválido";*/
        alert("Nome inválido!");
    }
}

function validacaoTelefone(telefone){
    if((telefone.value.length <= 10) &&
    (telefone.value.length >= 14))
    {
    telefoneParentese = "(" + telefone.value.substring(0,2) + ")" + telefone.value.substring(2);
    document.getElementById("msgtelefone").innerHTML="Telefone correto";
    document.getElementById("tel").innerHTML=telefoneParentese;
    }else{
        document.getElementById("msgtelefone").innerHTML="<font color='red'>Telefone incorreto </font>";
        alert("E-mail invalido");
    }
}
