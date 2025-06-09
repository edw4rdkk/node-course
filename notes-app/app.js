import {getNotes} from './notes.js'
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
    handler: (argv)=>{
      console.log('title: ' + argv.title);
      console.log('body: ' + argv.body)
    }
  })
  .command('remove', 'remove a note', ()=>console.log('removing a note'))
  .command('list', 'list a note', ()=>console.log('listing a note'))
  .command('read', 'read a note', ()=>console.log('reading a note'))
  .parse(hideBin(process.argv))

