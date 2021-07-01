const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });
  conn.on('connect', () => {
    console.log('Connection established.');
    conn.write('Name: TMH');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', data => console.log('Server:', data));
  
  return conn;
  
};

module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)