"use client";

import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 Send data here (API, email service, etc.)
    console.log(formData);

    // ✅ Clear all inputs
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Me
          </h1>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-full sm:w-1/2">
              <label className="leading-7 text-sm text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-900 rounded border border-gray-300 text-white py-2 px-3"
                required
              />
            </div>

            {/* Email */}
            <div className="p-2 w-full sm:w-1/2">
              <label className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-gray-900 rounded border border-gray-300 text-white py-2 px-3"
                required
              />
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <label className="leading-7 text-sm text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full bg-gray-900 rounded border border-gray-300 h-32 text-white py-2 px-3 resize-none"
                required
              />
            </div>

            {/* Button */}
            <div className="p-2 w-full flex justify-end">
              <button
                type="submit"
                className="text-white bg-black border border-gray-500 py-2 px-8 hover:bg-gray-800 rounded text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}