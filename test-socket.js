// THIS IS SERVER_SIDE JAVASCRIPT WHICH NEED NODEJS TO RUN
var ws = require("nodejs-websocket")
 
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text",x`` function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

/*
## NPM needs to be installed
npm install nodejs-websocket
node test-socket.js
*/