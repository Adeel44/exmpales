//const yargs = require("yargs")

const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(tittle , body){
    const notes = loadNotes()
    const dupNotes = notes.filter(function(notes){
        return note.tittle == tittle

    })
    if(dupNotes.length === 0){
        notes.push({
            tittle:tittle ,
            body: body
        })
        saveNotes(notes)
        console.log('New Note added')
    }
    else{
        console.log('Note tittle taken')
    }

}
const removeNote = function(tittle){
    const notes = loadNotes()
    const notesKeep = notes.filter(function(note){
        return note.tittle !== tittle
    })
    saveNotes(notesKeep)
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON )

}

const loadNotes = function(){
    try{
 const databuffer = fs.readFileSync('notes.json')
const dataJSON = databuffer.tostring()
return JSON.parse(dataJSON)
    }
    catch(e){
        return[]
    }

}

module.exports = {
    getNotes:getNotes,
    addNote: addNote,
    removeNote:removeNote
}