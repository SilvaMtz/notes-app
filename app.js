const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

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
    notes.addNote(argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a new note',
  handler: function () {
    console.log('Removing a new note!');
  }
})

// List command
yargs.command({
  command: 'list',
  describe: 'List all existing notes',
  handler: function () {
    console.log('Here are your notes!');
  }
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  handler: function () {
    console.log('Here is the note!');
  }
})

// add, remove, read, list

yargs.parse();
