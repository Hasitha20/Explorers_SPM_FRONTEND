import React, {useContext} from 'react'
import { GlobalState } from '../../../../Globalstate'
import * as AiIcons from 'react-icons/ai'
import SingleMessage from './SingleMessage'
import ReplyMessage from './reply/ReplyMessage'

function MessageList() {
    const state = useContext(GlobalState)
    const [messages] = state.messageAPI.userMessage

    return (
        <div>
            <div className="empIcon">
                <AiIcons.AiOutlineMessage />
                <h4>Customer Feedbacks</h4>
            </div>
            <hr />

            <div className="message-page-mainGrid">
                <div>
                    <h4>We have {messages.length} Feedbackes </h4>
                    <table>
                        <thead className="thead-dark">
                            <tr>
                                <th>User Name</th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                messages.map(message => {
                                    return <SingleMessage key={message._id} message={message} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MessageList
