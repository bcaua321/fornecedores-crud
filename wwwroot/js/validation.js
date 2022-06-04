const form = document.getElementById("form");
const elementNome = form.elements['fornecedor'];
const elementCnpj = form.elements['cnpj'];

const nome = elementNome.value;
const cnpj = elementCnpj.value;

form.addEventListener("submit", formValidation);

function formValidation(e){
  e.preventDefault();
  let nameInputIsValid = nameIsValid(nome, elementNome);
  let cnpjInputIsValid = cnpjIsValid(cnpj, elementCnpj);

  if(nameInputIsValid && cnpjInputIsValid){
    form.Submit();
  }
}

function cnpjIsValid(str, node){  
  if(!hasValue(str)){
    addMsg("Campo vazio", node, "invalid");
    return false;
  }

  if(str.length != 14){
    addMsg("Campo incorreto", node, "invalid");
    return false;
  }
  
  str.toInt();

  if(isNaN(str)){
    addMsg("Campo deve ser númerico.", node, "invalid");
    
    return false;
  }

  
  addMsg("", node, "valid");
  return true;
}

function nameIsValid(str, node){
  if(!hasValue(str)){
    addMsg("Campo vazio", node, "invalid");
    return false;
  }
  
  if(str.length > 100){
    addMsg("Nome com mais de 100 caracteres", node, "invalid");
    return false;
  }

  addMsg("", node, "valid");
  return true;
}

// Para adicionar a mensagem e formatação
function addMsg(str, node, isValid){
  const message = node.parentNode.getElementsByName("small");
  message.innerText = str;
  message.className = isValid;
  node.className = isValid; 
}

// Verificar se tem valor
function hasValue(input){
  if(input.trim().length === 0){
    return false;
  }

  return true;
}
