import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [roomId, setRoomId] = useState(0);
  return (
    <>
      <ChatRoom roomId={roomId} />
      <button onClick={() => setRoomId(roomId +  1)}>
        RoomId: {roomId}
      </button>
    </>
  );
}
