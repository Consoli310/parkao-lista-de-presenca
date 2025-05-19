const button = document.getElementById('btn')
var divId = 0
const input = document.getElementById("input")

var peopleQuantity = 0

input.addEventListener("keyup", (e) =>{
    if(e.key === "Enter"){
    document.getElementById("btn").click()
    }
})

const inputTitle = document.getElementById("inputTitle")
inputTitle.innerHTML = `${peopleQuantity} Convidados`

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
    input.value = ""

    list.scrollTop = list.scrollHeight;
}


function deleteName (divId){
    const div = document.getElementById(divId)
    if(div){
        div.remove()
        peopleQuantity -= 1
        inputTitle.innerHTML = `${peopleQuantity} Convidados`
    }
}

// Confirmação antes de sair da página
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});
