const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("server Started");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { name, password } = req.query;
    res.send(`Response Accepted By GET! Welcome ${name} your password is ${password}`);
})

app.post("/register", (req, res) => {
    let { name, password } = req.body;
    res.send(`Response accepted by POST Welcome ${name} your password is ${password}`)
})

