//console.log('Welcome to first Node js script');
const chalk = require('chalk')
const yargs = require('yargs')

const validator = require('validator')
const notes = require('./notes.js')

// const msg = getNotes();
// console.log(msg);
// const green = chalk.green.inverse.bold('Success')
// console.log(chalk.blue.inverse.bold('Success'))

// console.log(green)

// console.log(validator.isEmail('name@example.com'))
// console.log(validator.isURL('https/www.google.com.pk/'))

// const command = process.argv[2]
// creating add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        tittle:{
            describe:"Note tittle" ,
            demandOption: true ,
            type: 'string'
        },
        body:{
            describe:"Note body" ,
            demandOption: true ,
            type: 'string'

        }
    },
    handler: function(argv){
        // console.log('Tittle: ' + argv.tittle)
        // console.log('body: ' + argv.body)
        notes.addNote(argv.tittle , argv.body)
    }

})
// creating remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:
    {
        tittle:
        {
            describe:"Note tittle" ,
            demandOption: true ,
            type: 'string'
        }
    },
    handler: function(argv)
    {
        //console.log('removing a new note')
        notes.removeNote(argv.tittle)

    }


})

yargs.command({
    command: 'list',
    describe: 'List your note',
    handler: function(){
        console.log('Listing all the notes')
    }
})
// creat read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function(){
        console.log('Reading a new note')
    }

})
yargs.parse()

// console.log(process.argv)
//console.log(yargs.argv)




// if(command=== 'add'){
//     console.log('Adding note')
// }
// else if(command === 'remove'){
//     console.log('Removing note')
// }












