"use client";

import {useState} from "react";
import Link from "next/link";

export default function NumberCheck(){
    const [number, setNumber] = useState("");

    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
            <div className="flex flex-col bg-white border-black border-3 p-15 h-90 rounded-4xl">
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
                <Link href={`/${number}`}>
                    <button type="button" className="w-full text-white text-3xl rounded-xl bg-green-600 hover:bg-green-500 p-2 mt-2">
                        Check Number
                    </button>
                </Link>
            </div>
        </div>
    );
}