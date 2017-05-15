console.log('Starting app.js');
//third party and node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//user created modules
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  note === undefined ? console.log('Note title taken') : console.log('title: ' + note.title + ', body:' + note.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
