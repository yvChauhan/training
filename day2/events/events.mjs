import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('showPost', ({id, name}) => {
    console.log(`data received for ${name} with id ${id}`);
});




emitter.emit('showPost', {id: 1, name: 'Yash'});

emitter.on('showPost', ({id, name}) => {
    console.log(`Copy: data received for ${name} with id ${id}`);
});


emitter.emit('showPost', {id: 2, name: 'SUnny'});