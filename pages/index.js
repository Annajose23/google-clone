import Head from "next/head";
import Avatar from "../components/Avatar";
import {ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import {useRouter} from "next/router";

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 text-sm text-gray-700 justify-between">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          {/* avatar */}
          <Avatar url="https://yt3.ggpht.com/yti/APfAmoFJePQNoxrdLR8wS2oQ_YK0GISEcCXNZLwhI7jE=s108-c-k-c0x00ffffff-no-rj"/>
        </div>
      </header>
      {/* Body */}
    <form className="flex flex-col items-center mt-1 flex-grow w-4/5">
      <Image 
      src="https://www.pngall.com/wp-content/uploads/5/Google-Logo-PNG-Free-Image.png"
      height={200}
      width={400}/>
      <div className="flex w-full hover:shadow-lg 
      focus-within:shadow-lg max-w-md rounded-full border border-gray-200
      px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        <input type="text" ref={searchInputRef} className=" focus:outline-none flex-grow"/>
        <MicrophoneIcon className="h-5"/>
      </div>
      <div className="flex flex-col w-1/2 space-y-2 mt-1 justify-center
      sm:space-y-0 sm:flex-row sm:space-x-4"> 
        <button className="btn" onClick={search}>
    Google Search
        </button>
        <button className="btn" onClick={search}>
    I'm Feeling Lucky
        </button>
      </div>
    </form>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
