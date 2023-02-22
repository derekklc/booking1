const express = require("express")
const router = express.Router()
const Note = require("../models/models")

router.route("/create").post((request, response) => {
    console.log("response: ", response)
    const title = request.body.title
    const content = request.body.content
    const newNote = new Note({
        title,
        content,
    })

    newNote.save()
})

module.exports = router
