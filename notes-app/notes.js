import fs from 'fs'
import chalk from 'chalk';

export const addNote = (title, body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else{
        console.log(chalk.bold.red('note title already exists'))
    }
}

export const removeNote = (title)=> {
    const notes = loadNotes();
    const noteIndex = notes.findIndex((note)=>note.title === title);
    if(noteIndex !== -1){
        notes.splice(noteIndex, 1)
        saveNotes(notes)
        console.log(chalk.bold.green('note removed'))
    } else{
        console.log(chalk.bold.red('such title doesnt exists'))
    }
}

export const listNotes = () => {
    console.log(chalk.green.bold('your notes...'))
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title)
    });
}

export const readNote = (title, body) => {
    const notes = loadNotes();
    const myNote = notes.find((note) => note.title === title)
    if(myNote) {
        console.log(chalk.green.bold(myNote.title))
        console.log(myNote.body)
    } else console.log(chalk.bold.red("such note doesnt exist"))
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return []
    }
}
