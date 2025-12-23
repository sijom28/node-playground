const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })

        fs.writeFileSync('notes.json', JSON.stringify(notes))
        console.log(chalk.green.inverse('Note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
    console.log(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse ('Note removed!'))
    } else {
        console.log(chalk.red.inverse ('No note found!'))
    }
    console.log(notesToKeep)
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const result = notes.find((note) => {
        if(note.title === title){
            console.log(chalk.inverse(note.title))
            console.log(note.body)
            return true
        }
    })

    if(!result){
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
        loadNotes: loadNotes, 
        addNote: addNote,
        removeNote: removeNote,
        listNotes: listNotes,
        readNote: readNote
    }