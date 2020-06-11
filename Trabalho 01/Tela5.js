var totalCompra = 0;
var linhasTabela = 0;

function PegarValorCombo(nomeCombo) {
  var input;
  if(nomeCombo == 'eletro'){
    input= document.getElementById('txtQuant').value;
  }
  if(nomeCombo == 'moveis'){
    input= document.getElementById('txtQuant2').value;
  }
  if(nomeCombo == 'acessorios'){
    input= document.getElementById('txtQuant3').value;
  }
  if(nomeCombo == 'limpeza'){
    input= document.getElementById('txtQuant4').value;
  }
  if(input == ""){
  alert("Adicione a quantidade desejada");
  return;
     } else if(input <0){
      alert("Não são permitidos números negativos");
      return;
     }
    var valorTexto = parseFloat(input);
    
    var tipo = document.getElementById(nomeCombo).value;

    if(tipo == ""){
      alert("Adicione um produto");
      return;
    }

    if(valorTexto && tipo){
      var cb = document.getElementById(nomeCombo)
        var objeto = cb.options[tipo].text;
        var valorItem =  adicionarValor(nomeCombo);
        var valorTotal = valorItem * valorTexto;
        totalCompra += valorTotal;
        var margem = document.createElement('tr');
        var linha = document.createElement('td');
        linha.setAttribute("id", "tabela");
        var linha2 = document.createElement('td');
        linha2.setAttribute("id", "tabela");
        var linha3 = document.createElement('td');
        linha3.setAttribute("id", "tabela");
        var div = document.getElementById('resultado', id='tabela');
        linha.innerHTML = objeto;
        linha2.innerHTML = valorTexto;
        linha3.innerHTML = valorTotal;
     div.appendChild(margem);  
     div.appendChild(linha);  
     div.appendChild(linha2);  
     div.appendChild(linha3) 
     div.appendChild(margem);   
        linhasTabela +=3;
     somarValores();
    }
  }

  function somarValores(){
    var frete= 0;
    if(totalCompra < 2000){
      frete = 30;
    }
    else if(totalCompra >= 2000){
      frete = 50;
    }
    document.getElementById('frete').value = frete;
    document.getElementById('total').value = totalCompra + frete;
  }

  function realizarCompra(){
    document.getElementById('frete').value = "";
    document.getElementById('total').value = "";
    document.getElementById('eletro').value= "";
    document.getElementById('moveis').value= "";
    document.getElementById('acessorios').value= "";
    document.getElementById('limpeza').value= "";
    document.getElementById('txtQuant').value = "";
    document.getElementById('txtQuant4').value = "";
    document.getElementById('txtQuant2').value = "";
    document.getElementById('txtQuant3').value = "";
    totalCompra = 0;
    for(var i = 0; i < linhasTabela; i++){
       document.getElementById('tabela').remove('td');
    }
     return alert("Compra concluida com sucesso");
  } 

  function adicionarValor(nomeCombo){
    var tipo = document.getElementById(nomeCombo).value;
    var cb = document.getElementById(nomeCombo)
        var objeto = cb.options[tipo].text;
        var valor;
    if(nomeCombo == 'eletro'){
      if(tipo == 1)
        valor = 450;
      else if(tipo == 2)
        valor = 400;
      else if(tipo == 3)
        valor = 300;
      else if(tipo == 4)
        valor = 1900;
      else if(tipo == 5)
        valor = 100;
      else if(tipo == 6)
        valor = 2000;
      else if(tipo == 7)
        valor = 1500;
      else if(tipo == 8)
        valor = 1500;
    }
    else if(nomeCombo == 'moveis'){
      if(tipo == 1)
        valor = 650;
      else if(tipo == 2)
        valor = 600;
      else if(tipo == 3)
        valor = 100;
      else if(tipo == 4)
        valor = 1200;
      else if(tipo == 5)
        valor = 200;
      else if(tipo == 6)
        valor = 1500;
      else if(tipo == 7)
        valor = 180;
      else if(tipo == 8)
        valor = 600;
    }
   else if(nomeCombo == 'acessorios'){
    if(tipo == 1)
    valor = 100;
  else if(tipo == 2)
    valor = 200;
  else if(tipo == 3)
    valor = 100;
  else if(tipo == 4)
    valor = 150;
  else if(tipo == 5)
    valor = 30;
  else if(tipo == 6)
    valor = 70;
  else if(tipo == 7)
    valor = 15;
  else if(tipo == 8)
    valor = 40;
   }
  else if(nomeCombo == 'limpeza'){
    if(tipo == 1)
    valor = 10;
  else if(tipo == 2)
    valor = 7;
  else if(tipo == 3)
    valor = 300;
  else if(tipo == 4)
    valor = 40;
  else if(tipo == 5)
    valor = 12;
  else if(tipo == 6)
    valor = 5;
  else if(tipo == 7)
    valor = 5;
  else if(tipo == 8)
    valor = 12;
  }
  return valor;

  }

  function limpar(){
    
    document.getElementById('frete').value = "";
    document.getElementById('total').value = "";
    document.getElementById('eletro').value= "";
    document.getElementById('moveis').value= "";
    document.getElementById('acessorios').value= "";
    document.getElementById('limpeza').value= "";
    document.getElementById('txtQuant').value = "";
    document.getElementById('txtQuant4').value = "";
    document.getElementById('txtQuant2').value = "";
    document.getElementById('txtQuant3').value = "";
    for(var i = 0; i < linhasTabela; i++){
      document.getElementById('tabela').remove('td');
   }
    totalCompra = 0;
    frete = 0;

  }