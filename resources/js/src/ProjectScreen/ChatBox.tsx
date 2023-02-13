import React from 'react';
import { IMessage } from '../interfaces';
//import { UserCircle } from 'phosphor-react';

interface ChatBoxProps {
    taskView: boolean,
    messages: IMessage[],
    currentUserId: number,
}

const ChatMessage:React.FC<IMessage> = (props:IMessage) => {

    let messageStyles:any;

    if(props.fromThisUser){
        messageStyles = {
            /* Special styles like the tail pointing left or right */
        };
    } else {
        messageStyles = {
            /* Special styles like the tail pointing left or right */
        };
    }

    return <div className={`message rounded-lg text-white px-2 py-3 mb-2 w-2/3 ${props.fromThisUser ? "bg-pink-light ml-auto" : "bg-pink-dark"}`} style={messageStyles}>
            {props.content}
        </div>
}

// TODO: Use this function to make sure we're not re-rendering the messages unnecessarily - switch to useMemo
// class MessageList extends React.Component<{messages:ChatMessage[]}> {
//     shouldComponentUpdate(nextProps:any) {
//         // Only re-render if something has changed with the tasks
//         if(nextProps.messages === this.props.messages) {
//             return false;
//         }
//         return true;
//     }
//     render() {
//         return this.props.messages.map((message, index) => (
//             <ChatMessage key={message.id} content={message.content} index={index} />
//         ));
//     }
// }

const ChatBox:React.FC<ChatBoxProps> = (props:ChatBoxProps) => {


    return <div className={`chatbox border flex-grow p-2 ${props.taskView ? "rounded-lg w-full" : "rounded-t-lg"}`}>
        <div className={`messages-window max-h-96 overflow-y-scroll`}>
            {props.messages.map((message, index) => (
                <ChatMessage 
                    index={index} 
                    key={index}
                    fromThisUser={message.fromThisUser} 
                    content={message.content}
                    timestamp={message.timestamp}
                />
            ))}
        </div>
        <div className={`send-message-window`}>
                <textarea className="rounded-lg resize-none w-full border-2 p-2" placeholder="Your message..." ></textarea>
        </div>
    </div>
}

export default ChatBox;