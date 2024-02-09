import { useEffect } from "react";
import { createConnection } from "../utils";

const url = "https://localhost:1234";
export default function ChatRoom({ roomId }) {
  useEffect(() => {
    // synchronizing
    const connection = createConnection(url, roomId);
    connection.connect();

    //clean up
    return () => {
      connection.disConnect();
    };
  }, [roomId]);
  return <h1>ChatRoom</h1>;
}
