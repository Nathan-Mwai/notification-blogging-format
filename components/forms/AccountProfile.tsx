"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

interface Props{
    user:{
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string
}

const AccountProfile = ({user, btnTitle}: Props) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || "",
            image: user?.image || "",
        }
    })
  return (
    <Form>

    </Form>
  )
};

export default AccountProfile;
