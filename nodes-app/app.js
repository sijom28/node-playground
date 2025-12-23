// const addOperation = require('./utils.js')
// console.log(addOperation(3, 5))

// const validator = require('validator')

// console.log(notes())

// console.log(validator.isEmail('sijo@.com'))
// console.log(validator.isURL('https://mead.io'))

const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const command = process.argv[2]

// customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: (argv) => {
        notes.removeNote(argv.title)
        console.log('Removing a note!', argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    demandOption:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: () => notes.listNotes()
})


yargs.parse()
// console.log(yargs.argv)
