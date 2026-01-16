import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default function App() {

  const [stompClient, setStompClient] = useState(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    connect();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const connect = () => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(socket);

    stomp.connect({}, () => {
      stomp.subscribe("/topic/messages", (msg) => {
        setMessages(prev => [...prev, JSON.parse(msg.body)]);
      });
    });

    setStompClient(stomp);
  };

  const sendMessage = () => {
    if (!username || !message) return;

    stompClient.send(
      "/app/sendMessage",
      {},
      JSON.stringify({ sender: username, content: message })
    );

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-4 flex flex-col">

        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-3">
          💬 Chat App
        </h1>

        {/* Chat Box */}
        <div className="flex-1 overflow-y-auto space-y-2 mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs
                ${msg.sender === username
                  ? "bg-indigo-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-black"
                }`}
            >
              <p className="text-xs font-semibold">{msg.sender}</p>
              <p>{msg.content}</p>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Your name"
          className="border p-2 rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type message..."
            className="border p-2 rounded flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-indigo-500 text-white px-4 rounded hover:bg-indigo-600"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
