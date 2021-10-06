import React from "react";
import { Button } from "react-bootstrap";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

interface IConnectedUsersProps {
  users: any[];
}

const ConnectedUsers = ({ users }: IConnectedUsersProps) => {
  return (
    <div className="user-list">
      <h4>Connected Users</h4>
      {users.map((u, index) => {
        return <h6 key={index}>{u}</h6>;
      })}
    </div>
  );
};

export default ConnectedUsers;
