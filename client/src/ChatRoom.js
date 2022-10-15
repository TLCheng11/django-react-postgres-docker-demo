import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChatRoom() {
  const params = useParams();
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState({});
  const [data, setData] = useState("");

  // to create a link to websocket
  useEffect(() => {
    const chatSocket = new WebSocket(
      "ws://localhost:8000/ws/chats/" + params.room + "/"
    );
    setSocket(chatSocket);

    return () => chatSocket.close();
  }, []);

  // when receving update from websocket
  socket.onmessage = function (e) {
    const res = JSON.parse(e.data);
    setData(res.message);
    console.log(e.data);
  };

  // send data up to websocket
  function sendMessage() {
    socket.send(
      JSON.stringify({
        message: message,
      })
    );
  }

  return (
    <div>
      <div>
        <label htmlFor="message">Room: </label>
        <input
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>send</button>
      </div>
      <div>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default ChatRoom;
