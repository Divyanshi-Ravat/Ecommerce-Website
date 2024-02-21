import mongoose, { SchemaTypes } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const chatSchema = new mongoose.Schema({
    isGroupChat: String,
    users: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    latestMessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    },
    _id : String,
    
    
    chatName: String,
    groupAdmin: {
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

const chats = mongoose.model('chat', chatSchema);

export default chats;