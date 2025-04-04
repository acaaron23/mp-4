"use client";

import { useParams } from 'next/navigation';
import useSWR from "swr";
import PhoneNumberInfo from "@/app/components/number";

export default function Number(){
    const params = useParams();

    const {data, error} = useSWR(`/api/getNumberData?phone=${params.number}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    if (error){
        return(
            <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
                <div className="flex flex-col items-center bg-white border-black border-3 p-12 rounded-4xl">
                    <h1 className= "text-4xl" > Error: {error}! </h1>
                </div>
            </div>
        );
    }

    if (!data){
        return(
            <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
                <div className="flex flex-col items-center bg-white border-black border-3 p-12 rounded-4xl">
                    <h1 className= "text-4xl" > Loading... </h1>
                </div>
            </div>
        );
    }

    const phoneData = data.data;

    if (!phoneData) {
        return(
             <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
                <div className="flex flex-col items-center bg-white border-black border-3 p-12 rounded-4xl">
                    <h1 className= "text-4xl" > Phone data for this number is not available. </h1>
                </div>
             </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center bg-blue-200 h-200">
            <PhoneNumberInfo
                key={phoneData.phone}
                local={phoneData.format.local}
                valid={phoneData.valid}
                countryName={phoneData.country.name}
                location={phoneData.location}
                type={phoneData.type}
                carrier={phoneData.carrier}
            />
        </div>
    );
}