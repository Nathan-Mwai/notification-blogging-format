import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id:{type: String, required: true},
    username:{type: String, required:true, unique: true},
    name: {type: String, required:true},
    image: String,
    bio: String,
    // This will be for the blogs, articles and posts

    blogs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            // One user can have multiple blogs stored in the database
            ref: 'Blogs'
        }
    ],
    // The user has to fill the onboarding page
    onboarded:{
        type: Boolean,
        default:false,
    },
    // A user can belong to many communities
    communities:[
        {
            type: mongoose.Schema.Types.ObjectId,
            // referencing the community stored in the database
            ref: 'Community'
        }
    ]
})

// The first option is for the second time we call the schema because the schema already exists but if it doesn't then it will be called for the second option
const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;