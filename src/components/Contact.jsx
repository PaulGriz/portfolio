import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-auto px-4 text-white bg-gray-900">
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-1 mx-auto">
        <div>
          <p className="inline text-4xl border-b-4 border-gray-500">Contact</p>
          <p className="py-5">Submit the form below to contact with me:</p>
        </div>

        <div className="flex items-center justify-center pt-1">
          <form action="https://getform.io/f/06fa071e-4fd8-4a15-b783-712bce0b3bb1" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email" className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none" />
            <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-3 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
