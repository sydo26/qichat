import React, { useRef, useState, useEffect } from 'react'

import './Chat.css'

import UserMessageGroup from '../../components/User/UserMessageGroup/UserMessageGroup'
import UserMessage from '../../components/User/UserMessage/UserMessage'

const Chat = () => {

    const inputRef = useRef(null)
    const [messages, setMessages] = useState({order: [], users: []})

    // const submitHandle = e => {
    //     let author = "Eu"
    //     let msg = inputRef.current.value
    //     var date = new Date();

    //     let hour = `${date.getHours()}:${date.getMinutes()}`

    //     setMessages([...messages, { key: Math.floor(Math.random() * 1000000).toString(), author, msg, hour }])
    //     e.preventDefault()
    // }

    useEffect(() => {
        setMessages({
            order: [1, 1, 2, 1, 2, 1, 2],
            users: [
                {
                    messages: [
                        {message: "Olá mundo incrívelllllllllllllOlá mundo incrívelllllllllllllOlá mundo incrívelllllllllllllOlá mundo incrívelllllllllllllOlá mundo incrívelllllllllllllOlá mundo incrívelllllllllllll!!!", authorName: "Sydo", authorType: 1, time: 1593223190572},
                        {message: "Olá, quem é você?", authorName: "Sydo", authorType: 1, time: 1593223190572},
                        {message: "Hmm, interessante, de onde você veio?", authorName: "Sydo", authorType: 1, time: 1593223197287},
                        {message: "Que legal, me chamo Vinícius e sou de Iguatu", authorName: "Sydo", authorType: 1, time: 1593223198644}
                    ],
                    total: 3,
                    id: 1
                },
                {
                    messages: [
                        {message: "Oie, sou o Vitor", authorName: "Vitor", authorType: 2, time: 1593223194559},
                        {message: "Vim de Fortaleza, e você como se chama e de onde veio?", authorName: "Vitor", authorType: 2, time: 1593223197973},
                        {message: "Nossa, eu morava em Iguatu até um tempo atrás, que legal", authorName: "Vitor", authorType: 2, time: 1593223410641}
                    ],
                    total: 3,
                    id: 2
                }
            ]
        })
    }, [])


    const printMessages = (msg) => {
        const filterMessages = []
        let orderController = []
        for(let i = 0; i < msg.order.length; i++) {
            const userId = msg.order[i]
            const user = msg.users.filter(u => u.id === userId)[0]
            const message = user.messages[orderController.filter(x => x === userId).length]
            orderController.push(userId)
            filterMessages.push({...message, userId, styletype: orderController[orderController.length - 2] === userId ? "minimal" : "full"})
        }

        const test = filterMessages[0]
        if (test !== undefined) return <UserMessage userMessage={test} />
    }

    return (
        <div className="room">
            <div className="infos">

            </div>
            <div className="chat">
                <div className="chat-messages">
                    <UserMessageGroup>
                        { printMessages(messages) }
                    </UserMessageGroup>
                </div>
                <form className="chat-inputs" onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Digite uma mensagem" ref={inputRef}/>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Chat 