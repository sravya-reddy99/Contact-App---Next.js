"use client";
import React, { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

export default function ContactForm(props: {
  contact?: ContactType;
  action: (prevState: any, formData: FormData) => Promise<any>;
}) {
  const [state, formAction] = useActionState(props.action, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/contact/");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-x-4 p-2.5">
        <input type="hidden" name="id" value={props.contact?.id || ""} />
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={props.contact?.name || ""}
          required
          placeholder="Enter your name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:test-sm p-2"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={props.contact?.email || ""}
          required
          placeholder="Enter your email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:test-sm p-2"
        />
      </div>
      {state?.error && <p className="text-red-500 mt-2">{state.error}</p>}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent mt-5 bg-blue-600 text-white"
      >
        Save Contact
      </button>
    </form>
  );
}
