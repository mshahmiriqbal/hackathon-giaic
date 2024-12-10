import React from 'react'

function Page() {
  return (
    <div className="bg-gray-100">
    {/* Breadcrumb */}
    <div className="container mx-auto px-4 py-4 text-gray-600 text-sm">
      Home &gt; Shop &gt; Asgaard sofa
    </div>

    {/* Product Section */}
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow">
      {/* Product Images */}
      <div>
        <img
          src="/path-to-main-image.jpg"
          alt="Asgaard Sofa"
          className="rounded-lg mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail 1"
            className="rounded-lg border"
          />
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail 2"
            className="rounded-lg border"
          />
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail 3"
            className="rounded-lg border"
          />
          <img
            src="/path-to-thumbnail.jpg"
            alt="Thumbnail 4"
            className="rounded-lg border"
          />
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-semibold">Asgaard Sofa</h1>
        <p className="text-gray-700 my-2">Rs. 250,000.00</p>
        <div className="flex items-center gap-2 my-2">
          <span className="text-yellow-500">★★★★☆</span>
          <p className="text-sm">(5 Customer Reviews)</p>
        </div>
        <p className="text-gray-600 my-4">
          Setting the bar as one of the loudest speakers in its class...
        </p>

        {/* Size Options */}
        <div className="my-4">
          <h3 className="text-gray-700 font-semibold">Size</h3>
          <div className="flex gap-2 mt-2">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="my-4">
          <h3 className="text-gray-700 font-semibold">Color</h3>
          <div className="flex gap-2 mt-2">
            {["#000000", "#FF0000", "#FFD700"].map((color) => (
              <div
                key={color}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 flex gap-4">
          <input
            type="number"
            defaultValue={1}
            className="w-16 border rounded text-center"
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow">
      <h2 className="text-xl font-semibold">Description</h2>
      <p className="text-gray-600 mt-4">
        Embodying the raw, wayward spirit of rock ’n’ roll...
      </p>
    </div>

    {/* Related Products */}
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: "Trenton modular sofa", price: "Rs. 25,000.00" },
          { name: "Granite dining table", price: "Rs. 25,000.00" },
          { name: "Outdoor bar table", price: "Rs. 25,000.00" },
          { name: "Plain console", price: "Rs. 25,000.00" },
        ].map((product) => (
          <div
            key={product.name}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md"
          >
            <img
              src="/path-to-related-product.jpg"
              alt={product.name}
              className="rounded-lg mb-4"
            />
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="mt-8 bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h3 className="text-white font-semibold">Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Help</h3>
          <ul>
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
            className="mt-2 px-4 py-2 w-full rounded"
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