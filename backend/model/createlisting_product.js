import mongoose from "mongoose";


export const createlisting_productSchema = new mongoose.Schema({
    category : {
        type: String,
        required : [false, "Please provide category"],
        unique : false,
    },
    cropyear: {
        type: Number,
        required: [false, "Please provide the cropyear"],
        unique : false,
    },
    product: {
        type: String,
        required : [false, "Please provide product"],
        unique : false,
    },
    type: {
        type: String,
        required : [false, "Please provide type"],
        unique : false,
    },
    unitofmeasure: {
        type: String,
        required : [false, "Please provide unitofmeasure"],
        unique : false,
    },
    expirydate: {
        type: String,
        required : [false, "Please provide expiry date"],
        unique : false,
    },
    total: {
        type: Number,
        required : [false, "Please provide total "],
        unique : false,
    },
    price : {
        type: Number,
        required : [false, "Please provide price"],
        unique : false,
    },
    details: {
        type: String,
        required : [false, "Please provide details"],
        unique : false,
    },
    location: {
        type: String,
        required : [false, "Please provide location"],
        unique : false,
    },
    
    specificationtype: {
        type: String,
        required : [false, "Please provide specificationtype"],
        unique : false,
    },
    
    addspecification: {
        type: String,
        required : [false, "Please provide addspecification"],
        unique : false,
    },
    
    additionalinfo: {
        type: String,
        required : [false, "Please provide additionalinfo"],
        unique : false,
    },
    image: {
        type: String,
        required : [false, "Please provide additionalinfo"],
        unique : false,
    },
    
});

// export default  mongoose.model('createlisting_productSchema', createlisting_productSchema);
const createlisting_product = mongoose.model('createlisting_product', createlisting_productSchema);
export default createlisting_product;