import { messageType } from "./MessageTypes"

export const MessageHistory = (props: messageType[]) => {

    const messages = props.messages

    const messagesList = messages.map(message => {
        return (
            <>
            {message.type === "response"
            ? (<li className="clearfix">
                    <div className= "message-data align-right">
                        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                        <span className="message-data-name">{message.from.name}</span>
                        <i className="fa fa-circle me">●</i>
                        </div>
                    <div className="message other-message float-right">
                        {message.text}
                    </div>
                </li>)
            : message.type === "message" 
            ? (<li className="clearfix">
                    <div className="message-data">
                        <span className="message-data-name"><i className="fa fa-circle online">●</i>{message.from.name}</span>
                        <span className="message-data-time">{message.time}</span>
                    </div>
                    <div className="message my-message">
                        {message.text}
                    </div>
                </li>)
            : (<li className="clearfix">
                    <div className="message-data">
                        <span className="message-data-name"><i className="fa fa-circle online">●</i>{message.from.name}</span>
                        <span className="message-data-time">{message.time}</span>
                        <div >
                        <span style={{color: '#86BB71'}}>●</span>
                        <span style={{color: '#aed3a6'}}>●</span>
                        <span style={{color: '#d9e8d9'}}>●</span>
                        </div>
                    </div>
                </li>)
            }  
            </>       
        )
    })   
    
  return (
    <ul>
        {messagesList}
    </ul>
  )
}
