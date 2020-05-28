const events = require('events');
const event = new events.EventEmitter();

// Def function 1
var first_event = (a,b) => {
    console.log(`First Event Parameters ${a} ${b}`);
    //triggering 2nd Event
    event.emit('Second_event');
}

// Def function 2
var second_event = () => {
    console.log('Second Event Triggred');
}
    // Def Event 1
    event.on('first_event',first_event);
    // Def Event 2
    event.on('Second_event',second_event);    
    // Calling Event 1
    event.emit('first_event','Aditya','Athu');