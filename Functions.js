const inputbox = document.getElementById("input-box");
const listconteiner = document.getElementById("list-container");
//Função adicionar tarefa
function AddTask() {
    if (inputbox.value === '') {//<-verifica se há um valor na caixa input e adicionamos parametros se estiver vazia ou não
        alert('Você precisa adicionar uma tarefa!');//<-parametro caixa vazia
    } else {//Se tiver preenchida
        let li = document.createElement("li");//<-parametro que  cria um elemento html co o nome da tag li e è armazenada no let li
        li.innerHTML = inputbox.value;//<-parametro que adiciona li em um html que é o texto dentro li.Aqui estamos tambem adicionando o vaalor do ponto da caixa de entrada.Entao assim todo o texto que for digitado na caixa sera adicionado neste li
        listconteiner.appendChild(li);//<-parametro que diz onde sera acrescentado o elemento li no html.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
}
//
listconteiner.addEventListener("click", function (e) {//<-sempre que clicarmos no conteiner onde armazenamos as tarefas, ele verificara onde clicamos dentro deste container onde clicamos 
    if (e.target.tagName === "LI") {//se clicamos em li  ele deve aplicar parametro checked
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//salvar dados para sempre que iniciamos a pagina nao sejam alterados
function saveData(){
    localStorage.setItem("DATE", listconteiner.innerHTML);
}
function showTask(){
    listconteiner.innerHTML = localStorage.getItem("DATE");
}
showTask()