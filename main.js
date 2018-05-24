// Constructeur de l objet chrono
function chrono() {
    this.start = function () {
                    timeStart = window.setInterval(affichage, 1000);
                    timeOut = window.setTimeout(this.currentTime, 50000);
                };
    this.stop = function () {
                    console.log("le chrono est lancé depuis " + t + " secondes!");
                    timeStop = window.clearInterval(timeStart);
                    t = 0;
                };
    this.pause = function () {
                    timePause = window.clearInterval(timeStart)
                };
    this.currentTime = function () {
                            console.log("le chrono est lancé depuis " + t + " secondes!")
                        }
}

//  variable et fonction necessaire hors Objet et Constructeur
var timeStart;
var t = 0;
function affichage() {
    console.log("1 seconde");
    t++;
}

// instanciation de l objet chrono1
chrono1 = new chrono;
