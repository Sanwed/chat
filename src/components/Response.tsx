import {MessageInterface} from "../interfaces/interfaces.ts";

interface MessageProps {
  message: MessageInterface
}

function Response({message}: MessageProps) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{message.from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  )
}

export default Response
