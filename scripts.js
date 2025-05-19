const button = document.getElementById('btn')
var divId = 0
const input = document.getElementById("input")

var peopleQuantity = 0
var naoPagantesCount = 0

input.addEventListener("keyup", (e) =>{
    if(e.key === "Enter"){
    document.getElementById("btn").click()
    }
})

const inputTitle = document.getElementById("inputTitle")
inputTitle.innerHTML = `${peopleQuantity} Convidados`
const naoPagantesElement = document.getElementById("naoPagantes")
naoPagantesElement.innerHTML = `${naoPagantesCount} Não Pagantes`


function submit(){

    if(input.value.trim() === "") {
        alert("Por favor digite um nome antes de enviar")
        return
    }


    console.log("Nome digitado: " + input.value)

    const list = document.getElementById("list")
    const divName = document.createElement("div")
    const deleteButton = document.createElement("button")
    const name = document.createElement("p")

    divName.classList.add("divName")
    deleteButton.classList.add("deleteButton")
    name.classList.add("name")

    list.appendChild(divName)
    divName.appendChild(name)
    divName.appendChild(deleteButton)

    deleteButton.textContent = "Deletar"
    name.textContent = input.value

    divName.id = divId
    deleteButton.addEventListener("click", () => {
        deleteName(divName.id)})

    peopleQuantity += 1
    divId += 1
    inputTitle.innerHTML = `${peopleQuantity} Convidados`
    
    if(name.textContent.includes("-")){
        naoPagantesCount += 1
        naoPagantesElement.innerHTML = `${naoPagantesCount} Não Pagantes`
    }
    input.value = ""

    list.scrollTop = list.scrollHeight;
}


function deleteName (divId){
    const div = document.getElementById(divId)
    if(div){
        div.remove()
        peopleQuantity -= 1
        inputTitle.innerHTML = `${peopleQuantity} Convidados`
        const nameElement = div.querySelector(".name");
        if (nameElement && nameElement.textContent.includes("-")) {
            naoPagantesCount -= 1;
            naoPagantesElement.innerHTML = `${naoPagantesCount} Não Pagantes`;
        }
    }
}

// Confirmação antes de sair da página
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});
