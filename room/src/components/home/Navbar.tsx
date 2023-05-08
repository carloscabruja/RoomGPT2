import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row   justify-between items-center w-full mt-3 border-b py-7  px-2 border-gray-500 gap-2">
      <Link href="/dream" className="flex space-x-2">
        <Image
          alt="header text"
          src="/bed.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          roomGPT.io
        </h1>
      </Link>
      <div className="flex flex-row items-center space-x-2">
        <Link
          className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition"
          href="/dream"
        >
          <p>Sign Up </p>
        </Link>
        <Link
          className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition"
          href="/buy-credits"
        >
          <p>Buy Credits</p>
        </Link>
      </div>
    </header>
  );
}
