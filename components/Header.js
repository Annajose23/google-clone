import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
          height={80}
          width={140}
          onClick={() => router.push("/")}
          className="cursor-pointer "
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full
            shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer
                transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="mr-3 h-6 hidden sm:inline-flex
                text-blue-500 border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://ca-times.brightspotcdn.com/dims4/default/ac03f2f/2147483647/strip/true/crop/480x600+0+0/resize/840x1050!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F77%2Fa1%2Fb742a26a4455a64338630531d220%2Fjared-padalecki-booking-photo-10-27-2019.jpg"/>
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
