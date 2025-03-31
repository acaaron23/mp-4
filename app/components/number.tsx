"use client";

import {PhoneNumberType} from "@/types";

export default function PhoneNumberInfo(phoneNumber: PhoneNumberType) {
    return (
        <div className="flex flex-col bg-white p-5 rounded-4xl border-black border-3">
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold text-black underline">Number Report:</h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold text-blue-700">Number: {phoneNumber.local}</h1>
            </div>
            <div className="flex items-left justify-between">
                <h2 className={`text-5xl font-semibold ${phoneNumber.valid ? 'text-green-500' : 'text-red-500'}`}>
                    Validity: {phoneNumber.valid ? "Valid" : "Invalid"}
                </h2>
            </div>
            <div className="flex items-left justify-between">
                <p className="text-4xl font-medium text-black">Country: {phoneNumber.countryName}</p>
            </div>
            <div className="flex items-left justify-between">
                <p className="text-4xl font-medium text-black">Location: {phoneNumber.location}</p>
            </div>
            <div className="flex items-left justify-between">
                <p className="text-4xl font-medium text-black">Type: {phoneNumber.type}</p>
            </div>
            <div className="flex items-left justify-between">
                <p className="text-4xl font-medium text-black">Carrier: {phoneNumber.carrier}</p>
            </div>
        </div>
    );
}
