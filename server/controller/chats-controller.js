import Chat from '../model/chatSchema.js';

export const getChats = async (request, response) => {
    try {
        const chats = await Chats.find({});

        response.json(chats);
    }catch (error) {

    }
}