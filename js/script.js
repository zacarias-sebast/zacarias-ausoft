
let boxService1=document.getElementById("box-service-1")

let boxService2=document.getElementById("box-service-2")


boxService1.addEventListener("click", desabilitarBox1)

function desabilitarBox1(){
    boxService1.style.display="none"
}


boxService2.addEventListener("click",MonstrarBox1)
function MonstrarBox1(){
    boxService1.style.display="block"
}



