import axios from "axios";
import { ContactType } from "../_types/contact";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId?: string) => {
    try {
        const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch contacts");
    }
}

export const getContactById = async (contactId: string) => {
    try {
        const response = await axios.get(`${API_URL}/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch contact");
    }
}

export const addContact =  async (contactData: ContactType) => {
    try {
        const response = await axios.post(`${API_URL}/contacts`, contactData);
        return response.data;
    } catch (error) {
        throw new Error("Failed to add contact");
    }
}

export const deleteContact = async (contactId: string) => {
    try {
        await axios.delete(`${API_URL}/contacts/${contactId}`);
    } catch (error) {
        throw new Error("Failed to delete contact");
    }
}

export const updateContact = async (contactId: string, contactData: ContactType) => {
    try {
        const response = await axios.put(`${API_URL}/contacts/${contactId}`, contactData);
        return response.data;
    } catch (error) {
        throw new Error("Failed to update contact");
    }
}