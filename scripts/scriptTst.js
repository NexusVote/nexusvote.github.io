//Bloß eine Datei für Tests




/*import * as fs from 'fs';


function showInformation(fieldID){
    //import * as fs from 'fs';
    //const fs = require('fs');
    var el = document.getElementById(fieldID);
    
    
    el.textContent = fs.readFile('information.txt', (err, inputD) => {
    if (err) throw err;
        console.log(inputD.toString());
    })
}*/



/*function readSingleFile(evt) {
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
        }
        r.readAsText(f);
    } else {
        alert("Failed to load file");
    }
}
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);*/


/*function showInformation(fieldID){
    var r = new FileReader();
    var f = 'information.txt';
    var txt = r.readAsText(f);
    document.getElementById(fieldID).textContent(txt);
}*/

