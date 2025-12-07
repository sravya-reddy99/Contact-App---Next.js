"use server"
import { revalidatePath } from "next/cache";
import { addContact, deleteContact, updateContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const deleteContactAction = async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    try {
        await deleteContact(id)
        revalidatePath("/contact/")
        return {"success": true}
    }
    catch (error) {
        console.log("Delete contact failed", error)
        throw new Error("Delete contact failed");
    }
}

export const createContactAction = async (prevState: any, formData: FormData) => {
    if (!formData.get("name") || !formData.get("email")) {
        return {"error": "Name and Email are required"};
    }
    const user = await getSession();
    const newContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user!.id
    }
    try {
        await addContact(newContact)
        revalidatePath("/contact/")
        return {"success": true}
    }
    catch (error) {
        console.log("Create contact failed", error)
        return {error: "Create contact failed"};
    }
}


export const updateContactAction = async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    const user = await getSession();
    const updatedContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: user!.id
    }
    try {
        await updateContact(id, updatedContact)
        revalidatePath("/contact/")
        return {"success": true}
    }
    catch (error) {
        console.log("Update contact failed", error)
        return {error: "Update contact failed"};
    }
}


