import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface ILobbyProps {
  joinRoom: (user: any, room: any) => Promise<void>;
}

const Lobby = ({ joinRoom }: ILobbyProps) => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Form
      className="lobby"
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom(user, room);
      }}
    >
      <Form.Group>
        <Form.Control placeholder="name" onChange={(e) => setUser(e.target.value)} />
        <Form.Control placeholder="room" onChange={(e) => setRoom(e.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit" disabled={!user || !room ? true : false}>
        Join
      </Button>
    </Form>
  );
};

export default Lobby;
