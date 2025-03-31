import {PhoneNumberType} from "@/types";

export default function PhoneNumberInfo(phoneNumber: PhoneNumberType){
    return(
        <div className="flex justify-between items-center h-20">
            <h1>{phoneNumber.local}</h1>
            <h2>{phoneNumber.valid}</h2>
            <p>{phoneNumber.countryName}</p>
            <p>{phoneNumber.location}</p>
            <p>{phoneNumber.type}</p>
            <p>{phoneNumber.carrier}</p>
        </div>
    );
}