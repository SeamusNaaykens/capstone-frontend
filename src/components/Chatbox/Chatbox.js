import './Chatbox.scss'

function Chatbox() {
    return(
        <div className="chatbox">
            <h2 className="chatbox__heading">Start a Conversation</h2>
            <div className="chatbox__chat-field"></div>
            <div className='chatbox__input-container'>
                <input 
                className="chatbox__input" 
                type='text'
                placeholder="Type your message here..."></input>
                <button className="chatbox__button">Send</button>
            </div>
        </div>
    )
}
export default Chatbox