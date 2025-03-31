"use client";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
            <h1 className="text-9xl font-bold mb-4">Welcome!</h1>
            <p className="text-3xl">
                Click on <b>Number Checker</b> at the top to check the validity of a phone number.
            </p>
        </div>
    );
}
