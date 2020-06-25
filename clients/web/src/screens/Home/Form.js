import React, { useContext } from 'react'

import HomeContext from '../../contexts/HomeContext'

const Form = () => {
    const { online } = useContext(HomeContext)

    return (
        <div className="container-white">
            <form className="controlroom">
                <span className="controlroom-title">Crie sua sala ou entre em uma existente</span>
                <input className="controlroom-input" placeholder="Exemplo: saladovini" type="text" name="roomname" />
                <button className="controlroom-submit">Entrar/Criar</button>
                <span className="controlroom-info">
                    <li>{online} usuários conectados</li>
                </span>
            </form>
        </div>
    )
}

export default Form