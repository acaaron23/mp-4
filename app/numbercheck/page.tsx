"use client";

import {useState} from "react";
import Link from "next/link";

export default function NumberCheck(){
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");

    const validate = () => {
        if (isNaN(Number(number))) {
            setError("Invalid format, please enter a number!");
            return false;
        }

        if (number.length < 7 || number.length > 11) {
            setError("Please enter a valid number that is between 7 to 10 digits long!");
            return false;
        }

        setError("");
        return true;
    };

    const check = (e: { preventDefault: () => void; }) => {
        if (!validate()) {
            e.preventDefault();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
            <div className="flex flex-col items-center bg-white border-black border-3 p-15 h-90 rounded-4xl">
                <h1 className="font-bold text-5xl text-black mb-3">
                    Phone Number Verification
                </h1>
                <p className="font-semibold text-4xl text-center text-black">
                    Enter a phone number:
                </p>
                <input
                    type="text"
                    value={number}
                    placeholder="Phone Number"
                    className = "w-full bg-white border-black border-4 rounded-2xl text-3xl p-2 mt-2"
                    onChange={(e) => setNumber(e.target.value)}
                />

                <p className="text-red-500 text-center">
                    {error ? error : ""}
                </p>

                <Link
                    href={`/${number}`}
                    className="w-1/2 text-white text-3xl text-center rounded-xl bg-green-600 hover:bg-green-500 p-2 mt-2"
                    onClick={check}
                >
                    Check Number
                </Link>
            </div>
        </div>
    );
}
