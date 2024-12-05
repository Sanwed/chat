import {MessageInterface} from "../interfaces/interfaces.ts";
import Message from "./Message.tsx";
import Response from "./Response.tsx";
import Typing from "./Typing.tsx";

interface MessageHistoryProps {
  list: MessageInterface[]
}

function MessageHistory({list}: MessageHistoryProps) {
  if (!list.length) {
    console.error('Нет сообщений');
    return;
  }

  return (
    <ul>
      {list.map((message) => (
        message.type === 'message'
          ? <Message message={message} />
          : message.type === 'response'
            ? <Response message={message} />
            : <Typing message={message}/>
      ))}
    </ul>
  )
}

export default MessageHistory
