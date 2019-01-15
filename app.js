var app = require("./infra/config/server");

app.listen(app.get('port'), () => {
    console.log("Servidor Online");
});