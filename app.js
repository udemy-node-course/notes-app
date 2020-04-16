const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Custome yargs version 
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('List the notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read the note')
    }
})

// add, remove, read, list

// console.log(yargs.argv)
yargs.parse()