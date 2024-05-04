const contentNetwork = document.querySelector(".col-network .messages")
const contentHardware = document.querySelector(".col-hardware .messages")
const contentProgrammation = document.querySelector(".col-programmation .messages")
const loading = document.querySelector(".background.loading")
const template = document.querySelector(".template")


const getMessages = async () => {

    // const response = await fetch("http://localhost:4040/data")
    const response = await fetch("https://comentariosturningcomputer.onrender.com/data")

    const data = await response.json()

    const messagesNetwork = data.filter(message => {
        return message.area === "network"
    })

    const messagesHardware = data.filter(message => {
        return message.area === "hardware"
    })

    const messagesProgrammtaion = data.filter(message => {
        return message.area === "programmation"
    })

    putMessages(messagesNetwork, contentNetwork)
    putMessages(messagesHardware, contentHardware)
    putMessages(messagesProgrammtaion, contentProgrammation)

}

function putMessages(messages, content) {
    removeLoadingModal()

    const page = content.closest(".col").querySelector("h3").className
    console.log(messages)
    messages.map(item => {
        const message = template.cloneNode(true)
        message.classList.remove("template")
        message.querySelector(".name").innerText = item.name
        message.querySelector(".body").innerText = item.message
        message.querySelector(".date").innerText = item.date
        message.querySelector(".answers").innerText = `${item.answers.length} respostas`
        message.querySelector(".answers").href = `http://127.0.0.1:5500/admin.html?page=${page}&id=${item.id}`
        content.appendChild(message)
    })

}

loadingModal()
getMessages()

function loadingModal() {
    loading.classList.remove("hide")
}

function removeLoadingModal() {
    loading.classList.add("hide")
}