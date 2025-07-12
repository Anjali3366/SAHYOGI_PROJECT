import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rawMaterialProvided: {
      type: Boolean,
      default: true, // since raw material is provided
    },
    paymentPerUnit: {
      type: Number,
      required: true,
    },
    estimatedCompletionTime: {
      type: String, // e.g., "3 days", "1 week"
    },
    workType: {
      type: String,
      enum: ["handicraft", "assembly", "packaging", "stitching", "other"],
      required: true,
    },
  },
  { timestamp: true }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
