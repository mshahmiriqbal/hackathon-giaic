import React from 'react'

function Page() {
  return (
    <div>
    <div className="relative bg-cover bg-center h-60" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="relative z-10 container mx-auto px-4 text-white text-center py-16">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="text-sm mt-2">Home &gt; Checkout</p>
    </div>
  </div>


  <div className="container mx-auto my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Billing Details */}
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Billing details</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country / Region</label>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Sri Lanka</option>
            {/* Add other countries as options */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="House number and street name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Town / City</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Province</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Western Province</option>
              {/* Add other provinces as options */}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ZIP code</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional information</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>

    {/* Order Summary */}
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Product</h2>
      <div className="border-b pb-4">
        <p className="flex justify-between text-gray-700">
          Asgaard sofa x 1 <span>Rs. 250,000.00</span>
        </p>
      </div>
      <div className="mt-4">
        <p className="flex justify-between text-gray-700">
          Subtotal <span>Rs. 250,000.00</span>
        </p>
        <p className="flex justify-between text-gray-800 font-bold">
          Total <span>Rs. 250,000.00</span>
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
        <div className="space-y-2">
          <div>
            <input
              type="radio"
              id="bank-transfer"
              name="payment-method"
              className="mr-2"
              checked
            />
            <label htmlFor="bank-transfer" className="text-sm text-gray-600">
              Direct Bank Transfer
            </label>
            <p className="text-xs text-gray-500 ml-6">
              Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.
            </p>
          </div>
          <div>
            <input
              type="radio"
              id="cash-on-delivery"
              name="payment-method"
              className="mr-2"
            />
            <label htmlFor="cash-on-delivery" className="text-sm text-gray-600">
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-6"
      >
        Place order
      </button>
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