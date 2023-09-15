let nome=document.getElementById("nome")
let email=document.getElementById("email") 
let contacto=document.getElementById("contacto")
let mensage=document.getElementById("mensage")
let lbNotificacao=document.getElementById("lb-notificação")

let form=document.getElementsByTagName("form")[0]
form.addEventListener("submit",EnviarMensagem )

function EnviarMensagem(){
    event.preventDefault()
    if(nome.value == ""){
        alert("Preencha o campo nome")
    }
    if(email.value == ""){
        alert("Preencha o campo email")
    }
    if(contacto.value == ""){
        alert("Preencha o campo contacto")
    }
    if(mensage.value == ""){
        alert("Preencha o campo de mensagens")
    }
  lbNotificacao.innerText="Dados enviados"
}