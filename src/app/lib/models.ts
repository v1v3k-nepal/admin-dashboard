import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  userImg: string;
  isAdmin: boolean;
  isActive: boolean;
  phone?: string;
  address?: string;
  actions?: Array<string>;
}

interface ProductDocument extends Document {
  productName: string;
  desc: string;
  price: string | number;
  stock: string | number;
  productImg: string;
  color?: string;
  size?: string;
  category?: Com.Tcategories;
  actions?: Array<string>;
}

const userSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userImg: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    actions: {
      type: Array,
    },
  },
  { timestamps: true }
);

const productSchema: Schema<ProductDocument> = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    productImg: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    category: {
      type: Array,
    },
    actions: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const User =
  (mongoose.models?.User as mongoose.Model<UserDocument>) ||
  mongoose.model<UserDocument>("User", userSchema);
export const Product =
  (mongoose.models?.Product as mongoose.Model<ProductDocument>) ||
  mongoose.model<ProductDocument>("Product", productSchema);
