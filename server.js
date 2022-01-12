const express = require("express"),
    app = express(),
    chalk = require('chalk'),
    figlet = require('figlet'),
    name = figlet.textSync("List-Servers")
config = require("./includes/config"),
    PORT = process.env.PORT || 80;

app.set("view engine", "ejs");
app.use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({
        extended: true
    }));

// Principal
app.get("/", (req, res) => {
    res.render('index');
});

// Para Erros
app.all("*", (req, res) => {
    return res.render("404", {
        title: config.title
    });
});

// Inicia roteamento na porta 80
app.listen(PORT, () => {
    console.log(name);
    console.log(chalk.magenta('[Online]: ') + chalk.green('Porta : [' + PORT + ']'))
});