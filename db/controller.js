//require all of the modules that you use
const res = require('express/lib/response');
const fs = require('fs');
const { format } = require('path');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);
const deleteFromFile = util.promisify(fs.deleteFile);
//can be defined in a read and write method they suppport get, add, and delete make them other methods inside here
//if you want to delete a note you need a unique idenfitier that is a random number 
    //creates random ids
const uuid = require ('uuid/v1');

class Controller {
    getNotes () {
        //interact with the db.json
        readFromFile ("./db/db.json", "utf-8", (err,data) => {
            if (err) {
                throw err
            } else {
                const notes = JSON.parse(data);
                res.json(notes);
            }
        })
    }
    addNotes () {
        /*parameters: have to have data to write note
        take in notes */
        writeFromFile("./db/db.json", "utf-8", (err,data) => {
            if(err) {
                throw err;
            } else {
                const notes = JSON.parse(data);
                console.log(req.body);
                notes.push(req.body);
            writeFromFile("./db/db.json", JSON.stringify(notes, null,4), (err, data) => {
                    if(err) {
                        throw err;
                    } else {
                        res.json(notes);
                    }
                })
            }
        })
    }
    // get at the last minite 
    deleteNotes () {
           /*parameters: have to have data to write note
        take in notes */
        deleteFromFile("./db/db.json/", "utf-8", (err, data) => {
            if (err) {
                throw err;
            } else {
                //need to write delete file content
                const notes = JSON.parse(data)
            }
        })

    }
    readNotes () {
        /* looking at what is already there and spit it back out*/
        fetch ("/notes").then(res => res.json()).then(data => {
            console.log(data);
            data.forEach(note => {
                //creates new list on the side
                const newLi = document.createElement("li");
                newLi.textContent = `${note.title} created`;
                PerformanceObserverEntryList.append(newLi);
                //create new note pocket
                
            });

        })
    }
    writeNotes () {
        /*take in data parameters*/
        format.addEventListener ("submit", e => {
            e.PreventDefault();
            const newnoteobj = {
                title:document.querySelector("#newtitle").value,
                text:document.querrySelector("#newtext").value,
                id: uuid
            }
            console.log(newnoteobj);
            fetch("/notes", {
                method: "POST",
                body:JSON.stringify(newnoteobj),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then (res => {
                if(res.ok) {
                    location.reload();
                }
            })
        })
    }
}
module.exports = Controller();