import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../pages/footer'

export default function contact() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#DC065F] mb-8 text-center">
        Contact Me
      </h1>

      <form
        className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 space-y-6"
        action="https://formspree.io/f/mpwdwqyz"
  method="POST"
        /* onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for reaching out!');
        }} */
      >
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input 
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#DC065F]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
          name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#DC065F]"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
          name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#DC065F]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#DC065F] text-white px-6 py-2 rounded hover:bg-[#c44587] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  )
}
