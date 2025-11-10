const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public/css"))
app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("home")
})

app.get("/rolledice", (req, res) => {
    let ranNum = Math.floor(Math.random() * 6) + 1
    let num = 5;
    res.render("rolledice", { ranNum, num });
})

app.get("/ig/:username", (req, res) => {
    let followers = ["gaurav", "gopal", "naresh", "krishna", "ajeet"]
    let { username } = req.params;
    res.render("instagram", { user: username, followers })
})

app.get("/conditional", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1
    res.render("conditional", { num })

})

app.get("/accounts/:username", (req, res) => {
    let { username } = req.params;
    let Alldata = require("./data.json");
    let data = Alldata[username];
    // console.log(data);
    if (data) {
        res.render("accounts", { data })
    } else {
        res.render("error", { username })
    }
})

let port = 8080;
app.listen(port, () => {
    console.log("Port listining")
})