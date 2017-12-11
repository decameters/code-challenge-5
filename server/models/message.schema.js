var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    username: { type: String, required: true },
    message: { type: String }
});

module.exports = mongoose.model('Message', messageSchema);