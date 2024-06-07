// Importing necessary packages
const chalk = require('chalk');
const figlet = require('figlet');
const ora = require('ora');
const clui = require('clui');
const blessed = require('blessed');
const colors = require('colors');

// Examples of using the colors package
console.log('so cool'.trap.rainbow); // This line will print 'so cool' in rainbow colors with the 'trap' effect
console.log('also cool'.trap); // This line will print 'also cool' with the 'trap' effect
console.log('colorfull'.rainbow); // This line will print 'colorfull' in rainbow colors
console.log('zebra'.zebra); // This line will print 'zebra' with the 'zebra' effect
console.log('bold text'.bold.magenta); // This line will print 'bold text' in bold magenta color
console.log('now with background'.bgCyan.black.bold); // This line will print 'now with background' with cyan background, black text, and bold font
console.log('i love America'.america); // This line will print 'i love America' with the colors of the American flag
console.log('random colors'.random); // This line will print 'random colors' in random colors

// Figlet - creating ASCII art from the word "chedva"
figlet("chedva", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow); // This line will print the ASCII art of "chedva" in rainbow colors
});

// Ora - Creating an animated spinner
const spinner = ora('Loading unicorns').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);

// Clui - Creating a text-based user interface
const Gauge = clui.Gauge;
console.log(Gauge(0.5, 1, 20, 0.1, '50%')); // This line will print a gauge showing 50%

// Blessed - Building a complex text-based user interface
const screen = blessed.screen();
const box = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Hello {bold}world{/bold}!',
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        border: {
            fg: '#f0f0f0'
        }
    }
});
screen.append(box);
screen.render();
