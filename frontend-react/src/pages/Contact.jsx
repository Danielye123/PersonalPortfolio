import React from 'react';

const Contact = () => (
  <div
    id="contact"
    className="flex flex-col items-center justify-center mt-[200px]"
  >
    <div className="flex flex-col text-7xl">
      Let&apos;s Chat!
    </div>
    <form className="flex flex-col space-y-6 w-1/2 mt-10">
      <input type="text" placeholder="Your Name" className="h-12 rounded-lg pl-10 text-black" />
      <input type="email" id="email" placeholder="Your Email" className="h-12 rounded-lg pl-10 text-black" />
      <textarea type="text" placeholder="Your Message" className="h-40 rounded-lg pl-10 pt-5 place-content-start text-black" />
      <input type="submit" value="Send Message" className="border w-1/5 h-12 rounded-lg mx-auto bg-blue-800" />
    </form>
  </div>
);

export default Contact;
