function createConnection(url, roomId) {
  function connect() {
    console.log(`Connected Url:${url} RoomId: ${roomId}`);
  }
  function disConnect() {
    console.log(`Disconnected Url: ${url} RoomId: ${roomId}`);
  }
  return { connect, disConnect };
}

export { createConnection };
