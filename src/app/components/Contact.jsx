"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMailOpen } from "react-icons/lu";

function Contact() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    user_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_email, user_name, user_message } = formData;

    // Create a mailto link
    const mailtoLink = `mailto:tarunsinghwap7@gmail.com?subject=Message from ${encodeURIComponent(
      user_name
    )}&body=${encodeURIComponent(
      `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${user_message}`
    )}`;

    // Open the mailto link in the user's default email client
    window.location.href = mailtoLink;

    // Reset the form
    setFormData({
      user_email: "",
      user_name: "",
      user_message: "",
    });
  };

  return (
    <section className="py-[0px] w-[100%] min-w-[100%]">
      <div className="flex items-center gap-5">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-[80px] justify-between">
        <div className="w-auto max-w-xl space-y-5">
          <h2 className="text-primary-blue text-2xl font-bold">
            Why Be Shy, Say Hi...
          </h2>
          <p>
            I'm open to new opportunities and look forward to connecting with
            you. Whether you have inquiries or just want to say hello, feel free
            to reach out. I'll do my best to respond promptly!
          </p>
          <div className="flex gap-5">
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://www.linkedin.com/in/tarunsingh24"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://github.com/tarunsinghofficial"
            >
              <FaGithub size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="https://twitter.com/itsTarun24"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              target="_blank"
              className="hover:cursor-pointer hover:translate-y-[-3px] duration-300"
              href="mailto:tarunsinghwap7@gmail.com"
            >
              <LuMailOpen size={25} />
            </a>
          </div>
        </div>
        <div className="mt-10 w-full p-4 md:mt-0 md:w-[40%]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="tarunsinghwap7@gmail.com"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="John Doe"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="user_message"
                id="message"
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="Let's talk about..."
                value={formData.user_message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mr-4 w-full rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
