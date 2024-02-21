import mongoose, { SchemaTypes } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const messageSchema = new mongoose.Schema({
    
    sender: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    content : {
        type : mongoose.Schema.Types.ObjectId,
        trim : true
    },
   
    chat: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},
    {
        timestamps : true,
    }
);

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const messages = mongoose.model('message', messageSchema);

export default messages;