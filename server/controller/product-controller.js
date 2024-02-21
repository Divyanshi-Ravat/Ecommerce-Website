import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    }catch (error) {

    }
}

export const createProduct = async(request, response) =>{
    try{
        const {title} = request.body
        if(!title){
            return response.status(401).send({message:'Title required'})
        }
        const existingTitle = await Product.findOne({title})
        if(existingTitle){
            return response.status(200).send({
                success: true,
                message:'Product already exist'
            })
        }

        const product = request.body;
        const newProduct = new Product(product);
        await newProduct.save();
        response.status(200).json({ mesage: product });
    }catch(error){
        console.log(error)
        response.status(500).send({
            success:false,
            error,
            message:'Error in adding product'
        })
    }
}