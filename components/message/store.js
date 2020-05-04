const db = require('mongoose');
const Model = require('./model');
const config = require('./connection');

db.Promise = global.Promise;
db.connect(config.connection, {dbName: 'chat', useNewUrlParser: true, useUnifiedTopology: true});
console.log('[db] Conectada con éxito');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //updates
    //delete
}