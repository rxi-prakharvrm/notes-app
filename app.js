const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs version
// yargs.version('1.1.0');

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
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        try {
            notes.addNote(argv.title, argv.body);
        } catch(e) {
            console.log(chalk.red('Error: ' + e));
        }
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        try {
            notes.removeNote(argv.title);
        } catch(e) {
            console.log(chalk.red('Error: ' + e));
        }
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            descript: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        try {
            notes.readNote(argv.title);
        } catch(e) {
            console.log(chalk.red('Error: ' + e));
        }
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        try {
            notes.listNotes();
        } catch(e) {
            console.log(chalk.red('Error: ' + e));
        }
    }
})

// console.log(yargs.argv);
// alternatively, use yargs.parse() to parse the arguments

yargs.parse();