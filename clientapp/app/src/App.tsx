import React, { useState } from "react";
import "./App.css";
import Lobby from "./components/Lobby";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Chat from "./components/Chat";

function App() {
  const [connection, setConnection] = useState<any>();
  const [messages, setMessages] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  const joinRoom = async (user: any, room: any) => {
    try {
      const connection = new HubConnectionBuilder().withUrl("https://localhost:44397/chat").configureLogging(LogLevel.Information).build();

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.on("RecieveMessage", (user, message) => {
        console.log("message ", message);
        setMessages((messages: any) => [...messages, { user, message }]);
      });

      connection.onclose((e) => {
        setConnection(null);
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room }); // Anropar en metod på servern med namnet JoinRoom, och skickar in ett objekt innehållande användare och rum
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message: any) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="app">
      <h2>Chat</h2>
      {connection ? (
        <Chat messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} users={users} />
      ) : (
        <Lobby joinRoom={joinRoom} />
      )}
    </div>
  );
}

export default App;
