"use client";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-100">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-lg">
                Click on <b>Number Checker</b> on the top to check the validity of a phone number.
            </p>
        </div>
    );
}
