var server = require("./infra/config/server");

server.listen(server.port, () => {
    console.log("Server Online");
});