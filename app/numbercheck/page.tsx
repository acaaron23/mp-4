"use client";

import {useState} from "react";
import Link from "next/link";

export default function Home(){
    const [number, setNumber] = useState("");

    return (
        <div className ="flex justify-between items-center h-20">
            <h1> Verify phone numbers </h1>
            <p> Enter a phone number: </p>
            <input type="text" value={number} placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
            <Link href={`/${number}`}> Check Information </Link>
        </div>
    );
}