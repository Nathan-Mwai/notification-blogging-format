"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"


export async function updateUser(
    userId:string,
    username: string,
    name: string,
    image: string,
    bio: string,
    path:string
): Promise<void> {
    connectToDB();

    try {
        await User.findOneAndUpdate({
            id: userId
        },
        {
            username: username.toLowerCase(),
            name,
            image,
            bio,
            onboarded: true
        },{
            upsert: true,
            // Upsert updates and inserts
        }
    )
     if(path === '/profile/edit'){
        // Allows us to update the cache
        revalidatePath(path)
        // return redirect('/onboarding')
      }
    } catch (error) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}