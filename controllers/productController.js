import Product from "../models/Product.js";


// create product
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();

        res.status(200).json({
            success: true,
            message: "Successfully to created",
            data: savedProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to created"
        })
    }
}

// updated product
export const updatedProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, 
        { $set: req.body },    
        { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully to upadated",
            body: updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to updated"
        })
    }
}

// delete product
export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        await Product.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully to deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to deleted"
        })
    }
}

// get single product
export const getSingleProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);

        res.status(200).json({
            success: true,
            message: "Successfully to find on",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to find one"
        })
    }
}

// get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({
            success: true,
            message: "Successfully to find all",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to find all"
        })
    }
}

// get product counts 
export const getProductCount = async (req, res) => {
    try {
        const productCount = await Product.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            data: productCount
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch"
        });
    }
};