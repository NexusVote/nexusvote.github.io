//Methoden, die überall benötigt werden

//imports



/*------------------------------------------------------------------------------------------------------------------------*/
//überprüfen ob variablen zurückgesetzt werden müssen
function cookieproove() {
    if (sessionStorage.getItem('cookieallowed') != 1) {
        //und wenn man nicht zustimmt? ein alert mit der pflicht zum zustimmen
        //Hier muss dann halt was hin
        
        /*
        Man hat noch nicht zugestimmt:
        - ein alert wird angezeigt
        - neue Funktion: auf Click des Alert zustimmen(kann man eig auch über accept in cookie.js machen)
        --> Vielleicht aber auch einfach nicht

        */
    }
    //Fürs erste
    //--> Ich benutze eigentlich nichtmal cookies, alles landet im sessionstorage
     
}

//Namen setzen
function setName(){
    cookieproove();
    console.log("hello World");
    sessionStorage.setItem('firstName', document.getElementById('firstName').value);
    console.log(sessionStorage.getItem('firstName'));
    sessionStorage.setItem('lastName', document.getElementById('lastName').value);
}

//Name anzeigen
function showName(fieldID){
    var el = document.getElementById(fieldID);
    el.textContent = sessionStorage.getItem('firstName') + " " + sessionStorage.getItem('lastName');
}
