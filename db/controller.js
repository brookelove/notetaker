//require all of the modules that you use
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);
//can be defined in a read and write method they suppport get, add, and delete make them other methods inside here
//if you want to delete a note you need a unique idenfitier that is a random number 
    //creates random ids
    const uuid = require ('uuid/v1');

class Controller {
    getNotes () {
        //interact with the db.json
    }
    addNotes () {
        /*parameters: have to have data to write note
        take in notes */
    }
    deleteNOtes () {
           /*parameters: have to have data to write note
        take in notes */
    }
    readNotes () {
        /* looking at what is already there and spit it back out*/
    }
    writeNotes () {
        /*take in data
        parameters:  */
    }
}
module.exports = new Controller();