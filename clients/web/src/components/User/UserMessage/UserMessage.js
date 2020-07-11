import React from 'react'

import './UserMessage.css'

const UserMessage = ({ userMessage }) => {

    const { message, authorType, authorName } = userMessage

    // 30px
    // 6px
    // 3px
    // 5px

    return authorType === 1 ? (
        <li className="message">
            <div className="message-image">
                <img src="https://cdn.onlinewebfonts.com/svg/img_4741.png" alt="User image" />
            </div>
            <div className="message-content">
                <div className="message-header">
                    <div className="message-header-name">{authorName}</div>
                    <div className="message-header-whitespace"></div>
                    <div className="message-header-date">27/06/2020</div>
                    <div className="message-header-hour">20:00</div>
                </div>
                <div className="message-body">
                    <div className="message-body-text">
                        <span>{message}</span>
                    </div>
                </div>
            </div>
            <div className="followed-messages">
                
            </div>
        </li>
    ) : (
        <li className="message">
            {message}
        </li>
    )
}

export default UserMessage