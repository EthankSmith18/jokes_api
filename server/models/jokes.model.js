const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
