import React from 'react'

function Page() {
  return (
    <div className="bg-gray-100">
    {/* Banner */}
    <div className="relative bg-cover bg-center h-60" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mx-auto px-4 text-white text-center py-16">
        <h1 className="text-3xl font-bold">My Account</h1>
        <p className="text-sm mt-2">Home &gt; My account</p>
      </div>
    </div>

    {/* Login & Register Section */}
    <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username or email address
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
          <p className="text-sm text-center mt-4 text-blue-500 cursor-pointer">
            Lost Your Password?
          </p>
        </form>
      </div>

      {/* Register Form */}
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            A link to set a new password will be sent to your email address.
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-pink-50 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-lg font-semibold">Free Delivery</h3>
          <p className="text-sm text-gray-600 mt-2">
            For all orders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">90 Days Return</h3>
          <p className="text-sm text-gray-600 mt-2">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Secure Payment</h3>
          <p className="text-sm text-gray-600 mt-2">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>

    {/* Footer */}
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
  )
}

export default Page