const form = document.getElementById("form");
const elementCnpj = document.getElementById("cnpj");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const elementNome = form.elements[0];
  const elementCnpj = form.elements[1];

  const nome = elementNome.value;
  const cnpj = elementCnpj.value;


  let nameInputIsValid = nameIsValid(nome, elementNome);
  let cnpjInputIsValid = cnpjIsValid(cnpj, elementCnpj);

  if(nameInputIsValid && cnpjInputIsValid){
    form.submit();
  }
});

function cnpjIsValid(str, node){  
  if(!hasValue(str)){
    addMsg("Campo vazio", node, false);
    return false;
  }

  if(str.length != 14){
    addMsg("Campo incorreto", node, false);
    return false;
  }
  
  parseInt(str);

  if(isNaN(str)){
    addMsg("Campo deve ser númerico.", node, false);
    
    return false;
  }

  
  addMsg("", node, true);
  return true;
}

function nameIsValid(str, node){
  if(!hasValue(str)){
    addMsg("Campo vazio", node, false);
    return false;
  }
  
  if(str.length > 100){
    console.log("Tamanho " + str.length);
    addMsg("Nome com mais de 100 caracteres", node, false);
    return false;
  }

  addMsg("", node, true);
  return true;
}

// Para adicionar a mensagem e formatação
function addMsg(str, node, isValid){
  const message = node.parentNode.querySelector("small");
  if(isValid){
    node.classList.remove("invalid-input"); 
    message.innerText = str;
    message.className = "text-sucess";
    
    node.classList.add("valid-input"); 
    return;
  }
  
  node.classList.remove("valid-input"); 
  message.innerText = str;
  message.className = "text-danger";
  
  node.classList.add("invalid-input"); 
}

// Verificar se tem valor
function hasValue(input){
  if(input.trim().length == 0){
    console.log("o valor é: " + input);
    return false;
  }

  return true;
}
