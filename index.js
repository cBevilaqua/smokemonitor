const express = require("express");
const five = require("johnny-five");
const moment = require("moment");
const app = express();
const http = require("http").createServer(app);
const board = new five.Board();
const io = require("socket.io")(http);

board.on("ready", function() {
  var sensor = new five.Sensor({ pin: "A0", freq: 1000 });

  io.on("connection", function(socket) {
     sensor.scale(0, 100).on("change", function() {
      console.log("sensor value --> ", sensor.value)
      socket.emit("gas-data", {
        value: sensor.value,
        date: moment().format("HH:mm:ss")
      });
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log("Server running on: ", port);
});
