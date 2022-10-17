const router = require("express").Router()
const fs = require('fs')
let dbjson = require('../db/db.json')

router.get("/notes",(req, res) =>{
    dbjson = JSON.parse(fs.readFileSync('./db/db.json', "utf-8"))
    res.json(dbjson)
})

router.post("/notes",(req, res) =>{

let noteModel = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor (Math.random()*100)
}
    dbjson.push(noteModel)
    fs.writeFileSync("./db/db.json" , JSON.stringify(dbjson))

    res.json(dbjson)
})

module.exports = router