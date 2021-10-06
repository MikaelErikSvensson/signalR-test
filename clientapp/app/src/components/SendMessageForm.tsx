import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

interface ISendMessageFormProps {
  sendMessage: (message: any) => Promise<void>;
}

const SendMessageForm = ({ sendMessage }: ISendMessageFormProps) => {
  const [message, setMessage] = useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <InputGroup>
        <FormControl
          placeholder="message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit" disabled={!message}>
            Send
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;
