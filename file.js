
var colors = require('colors');
    console.log('so cool'.trap.rainbow);
    console.log('also cool'.trap);
    console.log('colorfull'.rainbow);
    console.log('zebra'.zebra);
    console.log('bold text'.bold.magenta);
    console.log('now with background'.bgCyan.black.bold);
    console.log('i love America'.america);
    console.log('random colors'.random);

    const figlet = require("figlet");
    const colors = require("colors");
    figlet("chedva", function (err, data) {
        if (err) {
             console.log("Something went wrong...");
             console.dir(err);
             return;
        }
        console.log(data.rainbow);
    });