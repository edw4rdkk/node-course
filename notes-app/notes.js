import fs from 'fs'

export const getNotes = () => 'Your notes...'

export const addNote = (title, body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title === title)

    if(duplicateNotes.length = 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else{
        console.log('note title already exists')
    }

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