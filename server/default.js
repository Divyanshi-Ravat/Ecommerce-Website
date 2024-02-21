

import Product from './model/productSchema.js';
import Chat from './model/chatSchema.js';
import { products } from './constants/product.js';
import {chats} from './constants/chat.js'

const DefaultData = async () => {
    
    try {
        const options = { ordered: false, wtimeout: 30000 };
        //await Product.deleteMany({});
        await Product.insertMany(products,options);
        await Chat.insertMany(chats,options);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;