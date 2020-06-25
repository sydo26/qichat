import React, { useContext } from 'react'

import HomeContext from '../../contexts/HomeContext'

const Navbar = () => {

    const { username } = useContext(HomeContext)
    
    return (
        <div className="navbar">
            <div className="navbar-user">
                <img className="navbar-user-image" src="https://cdn.onlinewebfonts.com/svg/img_4741.png" alt="Imagem de usuário" />
                <span className="navbar-user-name">{username}</span>
                <div className="navbar-user-operations">
                    {/* TEMPORÁRIO DIV*/}
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="navbar-actions">
                <a className="navbar-actions-link" href="a">Sobre</a>
                <a className="navbar-actions-link" href="b">Criar conta</a>
                <a className="navbar-actions-link" href="c">Logue-se agora</a>
            </div>
            <div className="navbar-social">
                <a className="navbar-social-link" href="a"><div></div></a>
                <a className="navbar-social-link" href="b"><div></div></a>
                <a className="navbar-social-link" href="c"><div></div></a>
            </div>
        </div>
    )
}

export default Navbar