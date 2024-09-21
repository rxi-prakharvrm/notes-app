const fs = require('fs');
const chalk = require('chalk');

// addNote function
const addNote = (title, body) => {
    const notes = loadNotes();
    
    const duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.bold(`Note with title "${title}" is added successfully!`));
    } else {
        console.log(chalk.red.bold(`Can't add! Note with title "${title}" is already present.`));
    }
}

// removeNote function
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold(`Note with title "${title}" is removed successfully!`));
    } 
    
    else {
        console.log(chalk.red.bold(`No note with title "${title}"!`));
    }
}

// readNote function
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note != undefined) {
        // console.log(chalk.blue('-------------------------------------------------------------'));
        console.log(chalk.bold.underline(note.title));
        console.log(`\n    "${note.body}"\n`);
        // console.log(chalk.blue('-------------------------------------------------------------'));
    } 
    
    else {
        console.log(chalk.red.bold(`No note with title "${title}"!`));
    }
}

// listNotes function
const listNotes = () => {
    const notes = loadNotes();

    if(notes.length !== 0) {
        notes.forEach((note) => {
            // console.log(chalk.blue('-------------------------------------------------------------'));
            console.log(chalk.bold.underline(note.title));
            console.log(`\n    "${note.body}"\n`);
            // console.log(chalk.blue('-------------------------------------------------------------'));
        })
    } 
    
    else {
        console.log(chalk.red.bold('No notes found!'));
    }
}

// saveNotes function
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// loadNotes function
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}