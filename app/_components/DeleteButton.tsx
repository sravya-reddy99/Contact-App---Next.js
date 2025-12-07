"use client";
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";
import { FiTrash2 } from "react-icons/fi";

export default function DeleteButton(props: { contact: ContactType, action: (prevState: any, formData: FormData) => Promise<any> }) {
    const [state,formAction] = useActionState(props.action, null)
  return (
    <form action = {formAction} method="post" className="ml-2.5">
      <input type="hidden" name="id" value={props.contact.id} />
      <button
        type="submit"
        style={{ color: "red", borderColor: "red" }}
        className=" bg-white col flex items-center gap-2 px-3 py-1 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100 text-red-700 cursor-pointer"
        onClick = {(e) => {
          if (!confirm(`Are you sure you want to delete ${props.contact.name}?`)) {
            e.preventDefault();
          }}}
      >
        <FiTrash2 className="text-red-500 text-lg" /> Delete
      </button>
    </form>
  );
}
