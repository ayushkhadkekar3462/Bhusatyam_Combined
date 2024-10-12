import mongoose from "mongoose";

export const createlisting_productioncontractSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please provide category"],
    unique: false,
  },
  cropyear: {
    type: Number,
    required: [true, "Please provide the crop year"],
    unique: false,
  },
  product: {
    type: String,
    required: [true, "Please provide product"],
    unique: false,
  },
  type: {
    type: String,
    required: [true, "Please provide type"],
    unique: false,
  },
  variety: {
    type: String,
    required: [true, "Please provide variety"],
    unique: false,
  },
  actOfGod: {
    type: String, // Should be either 'yes' or 'no'
    enum: ["yes", "no"],
    required: [true, "Please specify if Act of God is applicable"],
  },
  acres: {
    type: Number,
    required: [true, "Please provide the number of acres"],
  },
  unitofmeasure: {
    type: String,
    required: [true, "Please provide the unit of measure"],
    unique: false,
  },
  guaranteed: {
    type: Number,
    required: [true, "Please provide the total guarantee"],
    unique: false,
  },
  priceoption: {
    type: String,
    required: [true, "Please provide price option"],
    unique: false,
  },
  price: {
    type: Number,
    required: [true, "Please provide price"],
    unique: false,
  },
  details: {
    type: String,
    required: [true, "Please provide details"],
    unique: false,
  },
  location: {
    type: String,
    required: [true, "Please provide location"],
    unique: false,
  },
  specificationtype: {
    type: String,
    required: [true, "Please provide specification type"],
    unique: false,
  },
  addspecification: {
    type: String,
    required: [true, "Please provide the specification URL or document"],
    unique: false,
  },
  additionalinfo: {
    type: String,
    required: [true, "Please provide additional information"],
    unique: false,
  },
  username: {
    type: String,
    required: true,
    ref: 'User',  // Reference the User model by username
}
},{ timestamps: true });

const createlisting_productioncontract = mongoose.model('createlisting_productioncontract', createlisting_productioncontractSchema);
export default createlisting_productioncontract;
