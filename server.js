import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import productRouter from "./routes/productsRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: '*'
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_SECRET_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("MongoDB Connect TRUE!");
    } catch (error) {
        console.log("MongoDB Connect FALSE!", error);
    }
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/products", productRouter);

app.listen(port, () => {
    connectDB();
    console.log(`Server listening on port: ${port}`);
})
