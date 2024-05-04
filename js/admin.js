const urlSearch = new URLSearchParams(window.location.search)
const page = urlSearch.get("page")
const id = urlSearch.get("id")

document.querySelector("#page").value = page

const getMessages = async () => {

    //const response = await fetch("http://localhost:4040/data")
    const response = await fetch("https://comentariosturningcomputer.onrender.com/data")

    const data = await response.json()

    const message = data.find(item => {
        return item.id === id
    })

    if (message) {
        putMessage(message)
    }

}

function putMessage(message) {

    const messageBody = document.querySelector(".messageBody")
    document.querySelector("#id").value = message.id
    messageBody.querySelector(".name").innerText = message.name
    messageBody.querySelector(".body").innerText = message.message
    messageBody.querySelector(".date").innerText = message.date
    messageBody.querySelector(".answers").innerText = `${message.answers.length} respostas`

    putAnswers(message.answers)
}

function putAnswers(answers) {
    const template = document.querySelector(".template")
    answers.map(answer => {
        const div = template.cloneNode(true)
        div.classList.remove("template")
        div.querySelector(".name").innerHTML = `${answer.name} <i class='fa fa-check-circle'></i>`
        div.querySelector(".date").innerText = answer.date
        div.querySelector(".body").innerText = answer.answer
        document.querySelector(".answers-list").appendChild(div)
    })
}

getMessages()
