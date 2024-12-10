import React from 'react'

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Contact</h1>
          <p className="text-gray-500">Home {'>'} Contact</p>
        </div>
      </header>

      {/* Contact Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-2">
            For more information about our products and services, feel free to drop us an email. We’re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow p-8 rounded">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-500 material-icons">location_on</span>
                <p className="ml-4">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 material-icons">phone</span>
                <p className="ml-4">Mobile: (+84) 546-6789 | Hotline: (+84) 456-6789</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 material-icons">schedule</span>
                <p className="ml-4">Mon-Fri: 9:00-22:00 | Sat-Sun: 9:00-21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow p-8 rounded">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Optional"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <h3 className="text-white font-semibold">Links</h3>
        <ul className="mt-2 space-y-1">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold">Help</h3>
        <ul className="mt-2 space-y-1">
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold">Newsletter</h3>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="mt-2 px-4 py-2 w-full border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    <p className="text-center text-gray-500 mt-4">
      © 2022 Meubel House. All rights reserved.
    </p>
  </footer>
    </div>
  );
}

export default Page
