import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if(!process.env.MONGODB_URI) return console.log('Missing MONGODB_URI')
    if (isConnected) {
        console.log('Already connected to MongoDB')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI );
        isConnected = true
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
