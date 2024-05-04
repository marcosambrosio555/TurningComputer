const page = document.querySelector(".area h2").className
const loading = document.querySelector(".background")
const template = document.querySelector(".template")
const messagesList = document.querySelector(".wrapper-messages .messages")

const getMessages = async () => {

    // const response = await fetch("http://localhost:4040/data")
    const response = await fetch("https://comentariosturningcomputer.onrender.com/data")

    const data = await response.json()

    const messages = data.filter(message => {
        return message.area === page
    })

    putMessages(messages)

}

function putMessages(messages) {
    removeLoadingModal()

    messages.map(item => {
        const message = template.cloneNode(true)
        message.classList.remove("template")
        message.querySelector(".name").innerText = item.name
        message.querySelector(".body").innerText = item.message
        message.querySelector(".date").innerText = item.date
        message.querySelector(".answers").innerText = `${item.answers.length} respostas`
        message.querySelector(".answers").href = `http://127.0.0.1:5500/answer.html?page=${page}&id=${item.id}`
        messagesList.appendChild(message)
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