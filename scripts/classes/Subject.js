class Subject {
    constructor(name, taskfield, kindOfSubject, kernfach, eA, gA, pfach, eABand, gABand, belegungsverpflichtung, stundeneA, stundengAP, stundengA, eANichtWaehlbar, gANichtWaehlbar){
        this.name = name;

        //Aufgabenbereich
        this.taskfield = taskfield; //Index
        
        //Fachgruppe
        this.kindOfSubject = kindOfSubject;

        //Ist dieses Fach ein Kernfach?
        this.kernfach = kernfach; //true oder false

        //Auf erhöhtem Niveau wählbar?
        this.eA = eA;

        //Auf grundlegendem Niveau wählbar?
        this.gA = gA;

        //Als P1/P2/P3/P4/P5 wählbar?
        this.pfach = pfach; //Hier bitte Array als Eingabe

        //Band des eA Kurses?
        this.eABand = eABand; //Hier bitte Array als Eingabe

        //Band des gA Kurses?
        this.gABand = gABand; //Hier bitte Array als Eingabe

        //Belegungsverpflichtung?
        this.belegungsverpflichtung = belegungsverpflichtung;

        //Durchschnittliche Stundenanzahl eA
        this.stundeneA = stundeneA;

        //Durchschnittliche Stundenanzahl gA als Prüfungsfach
        this.stundengAP = stundengAP;

        //Durchschnittliche Stundenanzahl gA nicht als Prüfungsfach
        this.stundengA = stundengA;

        //Auf eA nicht wählbar mit
        this.eANichtWaehlbar = eANichtWaehlbar; //Hier bitte Array als Eingabe

        //Auf gA nicht wählbar mit
        this.gANichtWaehlbar = gANichtWaehlbar; //Hier bitte Array als Eingabe
        
        /*Ich glaube das brauche ich nicht mehr
        //Wurde dieses Fach auf eA gewählt
        let choseneA = false;

        //Wurde dieses Fach auf gA gewählt
        let chosengA = false;

        //Ist das Fach noch wählbar
        let selectable = [true, true, true, true, true, true] //--> das hier nochmal ordentlicher
        */
    }
}