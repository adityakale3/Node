const events = require('events');
const event = new events.EventEmitter();


// Creating Event
event.on('randomEventName',(msg) => {    console.log("Event Created :",msg);  });
// Calling Event
event.emit('randomEventName','Message text');


// console.log("File running");
// event.on('randomEventName',() => {    console.log("Event Created");  });
// setTimeout(() => {
//     console.log('Calling Event');
//     event.emit('randomEventName');    
// }, 2000);
