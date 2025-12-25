import Image from "next/image";
import logo from "./images/logo.png";
import ChatBox from "@/components/Chatbox";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-[80vh] w-full z-10 px-4">
      <div className="mt-5 flex flex-col items-center w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="flex items-center text-black text-5xl md:text-6xl justify-center -mt-8">
            <Image
              src={logo}
              alt="MathsBuddy logo"
              width={120}
              priority
              style={{ zIndex: 1 }}
              className="-mr-2"
            />
            <span className="text-blue-600 -ml-2">Maths</span>Buddy

          </h1>
        </div>

        <div className="w-full -mt-8 flex flex-col items-center gap-6">
          <div className="w-full">
            <ChatBox />
          </div>
        </div>
      </div>
    </main>
  );
}
