import React, {useState, useEffect} from 'react'
import { useChannel } from "./abylreacteffect.component";
import Ably from "ably/promises";

const ably = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' });
import styles from './abylchat.module.css';

const Abylchat = () => {
  let inputBox: any;
  let messageEnd: any;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState<any>([]);
  const messageTextIsEmpty = messageText.trim().length === 0;
    // RealtimePromise | RealtimeChannelPromise
  const [channel] = useChannel("chat-demo", (message: any) => {
    // Here we're computing the state that'll be drawn into the message history
    // We do that by slicing the last 199 messages from the receivedMessages buffer

    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);

    // Then finally, we take the message history, and combine it with the new message
    // This means we'll always have up to 199 message + 1 new message, stored using the
    // setMessages react useState hook
  });
  const sendChatMessage = (messageText: string) => {
    // channel.publish{ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.focus();
  }

  const handleFormSubmission = (event: any) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }

  const handleKeyPress = (event: any) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  }

  const messages = receivedMessages.map((message: any, index: number) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    return <span key={index} className={styles.message} data-author={author}>{message.data}</span>;
  });
  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });
  return (
      <div className={styles.chatarea}>
        <h1>Get Connected</h1>
        <div className={styles.chatHolder}>
        <div className={styles.chatText}>
        {messages}
        <div ref={(element) => { messageEnd = element; }}></div>
        </div>
        <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
            ref={(element) => { inputBox = element; }}
            value={messageText}
            placeholder="Type a message..."
            onChange={e => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.sendbutton} disabled={messageTextIsEmpty}>Send</button>
        </form>
    </div>
      </div>
  )
}

export default Abylchat