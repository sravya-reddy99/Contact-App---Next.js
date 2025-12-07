"use server"

import axios from "axios"
import { redirect } from "next/navigation"
import { UserType } from "../_types/user"
import { deleteSession, setSession } from "../_lib/session"

const API_URL = "http://localhost:3001"

export const loginAction = async(formData: FormData) => {
    try {
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);
        const user: UserType = response.data[0];
        if (!user) {
            throw new Error("Invalid Credentials");
        }
        //set user in session or cookie
        await setSession({name: user.name, email: user.email, id: user.id})
    }
    catch (error) {
        throw new Error("Login failed");
    }

    redirect("/contact/")
}
;
export const logoutAction = async () => {
    await deleteSession();
    redirect("/login")
}

export const registerAction = async(formData: FormData) => {
    const newUser: UserType = {
        "name": formData.get("name") as string,
        "email": formData.get("email") as string,
        "password": formData.get("password") as string
    }
    try {
        const response = await axios.post(`${API_URL}/users`, newUser);
        const user: UserType = response.data;
        
        if (!user) {
            throw new Error("Registration failed");
        }
    }
    catch (error) {
        throw new Error("Registration failed");
    }

    redirect("/login/")
}

