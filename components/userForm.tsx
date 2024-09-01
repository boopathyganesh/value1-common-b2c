"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const UserForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        const res = await fetch("/api/Users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
            const response = await res.json();
            setErrorMessage(response.message);
        } else {
            router.refresh();
            router.push("/");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col justify-center items-center gap-3 w-1/2"
            >
                <h1>Create New User</h1>
                <label>Full Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.name}
                    className="m-2 h-12 w-full px-3 py-1 rounded-xl border-2 border-indigo-400"
                />
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.email}
                    className="m-2 h-12 w-full px-3 py-1 rounded-xl border-2 border-indigo-400"
                />
                <label>Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required={true}
                    value={formData.password}
                    className="m-2 h-12 w-full px-3 py-1 rounded-xl border-2 border-indigo-400"
                />
                <input
                    type="submit"
                    value="Create User"
                    className="bg-indigo-400 hover:bg-indigo-500 rounded-xl w-max px-5 py-2"
                />
            </form>
            <p className="text-red-500">{errorMessage}</p>
        </>
    );
};

export default UserForm;