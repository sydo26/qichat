import React from 'react'

import './UserMessageGroup.css'

const UserMessageGroup = ({children}) => {

    return (
        <ul className="messages">
            {children}
        </ul>
    )
}

export default UserMessageGroup