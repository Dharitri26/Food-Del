import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:Mongo123@cluster0.i4mpb4o.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}