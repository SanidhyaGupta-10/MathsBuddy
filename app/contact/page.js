"use client";
import Footer from "@/components/Footer";


const Contact = () => {
  return (
<>

    <div className="p-8 mx-auto max-w-lg text-center rounded-lg">
      <h1 className="text-3xl font-bold mt-5">Contact Us</h1>

      <div className="flex flex-col mt-5 justify-center items-center gap-3 mb-60">

        {/* Instagram */}
        <button
          type="button"
          className="text-white bg-linear-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-pink-400 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center w-1/2"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5.9.5.5.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-.9-.5-.5-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1S4.5.4 3.7.8c-.9.4-1.7 1-2.4 1.7C.6 3.1 0 3.9.6 4.7c.4.9.6 1.6.7 3 .1 1.4.1 1.8.1 4.3s0 2.9-.1 4.3c-.1 1.4-.3 2.1-.7 3-.6.8-1.2 1.6-1.8 2.3-.7.7-1.6 1.3-2.4 1.7-.9.4-1.7.6-3 .7C.3 23.7 0 23.7 0 24c0 .3.3.3 4.3.3h.6c1.4-.1 2.1-.3 3-.7.8-.4 1.6-1 2.4-1.7.7-.7 1.3-1.5 1.8-2.3.4-.9.6-1.6.7-3 .1-1.4.1-1.8.1-4.3s0-2.9-.1-4.3c-.1-1.4-.3-2.1-.7-3C15.5 1.3 15 1 14.3.6c-.9-.4-1.7-.6-3-.7C11.7 0 11.3 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm5.3-10.9a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z" />
          </svg>
          Contact us on Instagram
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/SanidhyaGupta-10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#24292F] hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center w-1/2"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
          </svg>
          Contact us on GitHub
        </a>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Contact;
