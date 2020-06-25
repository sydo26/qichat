import React, { useState, useEffect } from 'react'

import './Home.css'

import Navbar from './Navbar'
import Logo from './Logo'
import Form from './Form'

import HomeContext from '../../contexts/HomeContext'

const Home = () => {

    const [username, setUsername] = useState("")
    const [online, setOnline] = useState(0)

    const rand = (n) => n.map(v => Math.floor(Math.random() * 10)).join('').toString()

    useEffect(() => {
        setUsername(`Anonymous-${rand([0, 0, 0, 0, 0, 0, 0, 0, 0])}`)
        setOnline(1)
    }, [])
    
    return (
        <HomeContext.Provider value={{username, online}}>
            <Navbar/>
            <Logo />
            <Form />
        </HomeContext.Provider>
    )
}

export default Home