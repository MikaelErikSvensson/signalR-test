import React from "react";
import { Button } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import ConnectedUsers from "./ConnectedUsers";

interface IChatProps {
  messages: any[];
  sendMessage: (message: any) => Promise<void>;
  closeConnection: () => Promise<void>;
  users: any[];
}

const Chat = ({ messages, sendMessage, closeConnection, users }: IChatProps) => {
  return (
    <div>
      <div className="leave-room">
        <Button variant="danger" onClick={() => closeConnection()}>
          Leave room
        </Button>
      </div>
      <ConnectedUsers users={users} />
      <div className="chat">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
