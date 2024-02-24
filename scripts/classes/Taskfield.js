class Taskfield {
    constructor(name, shortName, kindOfSubject, numberSubjects){
        this.name = name;

        //Kürzel
        this.shortName = shortName;

        //Aus welchen Fächertypen besteht dieser Aufgabenbereich
        this.kindOfSubject = kindOfSubject; //Hier bitte Array als Eingabe

        //Wie viele Fächer müssen aus diesem Aufgabenfeld in den Prüfungsfächern sein
        this.numberSubjects = numberSubjects; //Array

        /* Brauche ich glaube nicht (Muss dass doch eh im local Strorage speichern)
        //Wie viele Fächer diesen Types wurden gewählt
        let numberChoosen = 0;
        */
    }

}