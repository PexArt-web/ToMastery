require("dotenv").config()
const port = process.env.PORT

const { log } = console;

// log("server now working")//
const express = require("express")
const app = express()

const server = app.listen(port, () =>{
log(`server started at port ${port}`)
})

log(server, "server info")