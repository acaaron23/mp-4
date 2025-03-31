import Link from "next/link";

export default function Header() {
    const linkStyling = "p-4 text-white text-2xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20 bg-black">
            <h2 className="text-3xl font-semibold p-4 m-2 text-white"> Validity of Phone Numbers </h2>
            <nav className="p-2 m-2">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/numbercheck" className={linkStyling}>
                    Number Validator
                </Link>
            </nav>
        </header>
    );
}