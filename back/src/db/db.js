import mongoose from "mongoose";


async function connectDB() {
    try {
        await mongoose.connect(process.env.DB);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Encerra o processo com um sinal de erro
    }
}

export default connectDB