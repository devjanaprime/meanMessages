let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;
let messageSchema = new Schema({
    from: String,
    message: String
});
let Messages = mongoose.model( 'messages', messageSchema );
module.export = Messages;