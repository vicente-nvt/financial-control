var server = require("./infra/server");

server.listen(server.port, () => {
    console.log("Server Online");
});