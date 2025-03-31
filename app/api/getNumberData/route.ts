"use server";

import { NextResponse } from "next/server"

const NUMBER_API_KEY = process.env.NUMBER_API_KEY;

export async function GET(request: Request) {
    const url = new URL(request.url);
    const phoneNumber= url.searchParams.get("phone");

    if (!phoneNumber) {
        return NextResponse.json({ error: "No phone number provided"});
    }

    const res = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${NUMBER_API_KEY}&phone=${phoneNumber}`);

    if (res.status === 429) {
        return NextResponse.json({error: "The request was aborted due to the number of allowed requests per second being reached."});
    }

    if (res.status === 503) {
        return NextResponse.json({error: "The server was unavailable."});
    }

    if (!res.ok) {
        return NextResponse.json({error: "Failed to fetch data from the API."});
    }

    const data = await res.json();

    return NextResponse.json({data});
}
