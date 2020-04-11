const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
  return "Your notes...";
}

// Add a new note if not duplicated
// params: title: string, body: string
// exported: TRUE
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter( note => note.title === title );

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.bgGreen.white('New note added!'));
  } else {
    console.log(chalk.bgRed.white('ERROR: Note title taken!'));
  }
}

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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};