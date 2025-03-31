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

    if(error) return <h1>This {error} happened</h1>
    if(!data) return <h1>Loading...</h1>

    const phoneData = data.data;

    return (
        <div className = "flex justify-between items-center h-20" >
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