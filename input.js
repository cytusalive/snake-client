let connection;

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'q':
      connection.write('Say: helo am snek');
      break;
    case 'e':
      connection.write('Say: gib food');
      break;
  }
};


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;