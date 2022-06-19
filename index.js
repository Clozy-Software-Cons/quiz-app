const express = require("express");
const app = express();
const server = require("http").Server(app)

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})