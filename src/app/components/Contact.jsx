"use client";
import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMailOpen } from "react-icons/lu";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xbh2uoi", // Replace with your EmailJS service ID
        "template_k998dub", // Replace with your EmailJS template ID
        form.current,
        "urCfeKaFZcjbG3cxd" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    setFormData({
      user_email: "",
      user_name: "",
      user_message: "",
    });
  };

  return (
    <section className="py-[0px] w-[100%] min-w-[100%]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-[80px] justify-between">
        <div className="w-auto max-w-xl space-y-5">
          <h2 className="text-2xl text-primary-blue font-bold">
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
          {/* when message is successful, say thanks message else show form */}
          <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
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
                className="mb-2 block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                placeholder="John Doe"
                name="user_subject"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
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
