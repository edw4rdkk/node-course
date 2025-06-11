import {getNotes, addNote, removeNote, listNotes} from './notes.js'
import chalk from 'chalk'
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'

yargs()
  .command({
    command: 'add',
    describe: 'add a new note',
    builder: {
      title:{
        describe: 'note title',
        demandOption: true, 
        type: 'string'
      },
      body:{
        describe: 'note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler(argv) {
      addNote(argv.title, argv.body)
    }
  })
  .command({
    command: 'remove',
    describe: 'remove a note',
    builder: {    title:{
      describe: 'note title',
      demandOption: true, 
      type: 'string'
    }},
    handler(argv) {
      removeNote(argv.title)
    }
  })
  .command({
    command: 'list',
    describe: 'list a note',
    handler() {
      listNotes();
    }
  })
  .command('read', 'read a note', ()=>console.log('reading a note'))
  .parse(hideBin(process.argv))

