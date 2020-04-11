const chalk = require('chalk');
const fs = require('fs');

// Load existing notes
// params: N/A
// exported: FALSE
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch(e) {
    return [];
  }
}

// Save a note into notes.json
// params: title: string, body: string
// exported: FALSE
const saveNotes =  notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

// Add a new note if not duplicated
// params: title: string, body: string
// exported: TRUE
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title)
  if (!duplicateNote) {
    notes.push({
      id: notes.length + 1,
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.bgGreen.white('New note added!'));
  } else {
    console.log(chalk.bgRed.white('ERROR: Note title taken!'));
  }
}

// Remove an existing note
// params: title: string
// exported: TRUE
const removeNote = title => {
  const notes = loadNotes();
  const filteredNotes = notes.filter( note => note.title !== title );
  if (filteredNotes.length < notes.length) {
    saveNotes(filteredNotes)
    console.log(chalk.bgGreen.white(title + " removed!"));
  } else {
    console.log(chalk.bgRed.white("ERROR: Note does not exist!"))
  }
}

// List all existing notes
// params: N/A
// exported: TRUE
const getNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.white.bold("Your notes:"))
    notes.forEach( (note) => {
      console.log(note.id + ". " + note.title);
    } );
  } else {
    console.log(chalk.white.bold("You haven't saved any notes yet!"));
  }
}

// Read an existing note
// params: title: string
// exported: TRUE
const readNote = (title) => {
  const notes = loadNotes();
  const selectedNote = notes.find( note => note.title === title );
  if (selectedNote) {
    console.log(chalk.bold(selectedNote.title))
    console.log(selectedNote.body)
  } else {
    console.log(chalk.bgRed.white("ERROR: Note does not exist!"))
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  getNotes: getNotes,
  readNote: readNote
};