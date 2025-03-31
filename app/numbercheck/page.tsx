"use client";

import {useState} from "react";
import Link from "next/link";

export default function NumberCheck(){
    const [number, setNumber] = useState("");

    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-100">
            <h1 className="font-bold text-3xl text-center text-black">
                Phone Number Verification
            </h1>
            <p className="font-semibold text-lg text-center text-black">
                Enter a phone number:
            </p>
            <input
                type="text"
                value={number}
                placeholder="Phone Number"
                className = "bg-white rounded-xl p-1 m-1"
                onChange={(e) => setNumber(e.target.value)}
            />
            <Link href={`/${number}`}>
                <button type="button" className="text-white rounded-xl bg-red-500 hover:bg-red-400 p-2 mt-1">
                    Check Number
                </button>
            </Link>
        </div>
    );
}