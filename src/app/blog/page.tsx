import React from 'react'

function Page() {
  return (
    
    
      
    
        <div className="bg-gray-100 min-h-screen">
          {/* Header */}
          <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-2xl font-bold">Blog</h1>
              <p className="text-gray-500">Home {'>'} Blog</p>
            </div>
          </header>
    
          {/* Main Content */}
          <main className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="col-span-3 space-y-8">
              {/* Post 1 */}
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="/blog1.jpg"
                  alt="Going all-in with millennial design"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">
                    Admin • 14 Oct 2022 • Wood
                  </p>
                  <h2 className="text-xl font-semibold mt-2">
                    Going all-in with millennial design
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a href="#" className="text-blue-500 mt-4 block">
                    Read more
                  </a>
                </div>
              </div>
    
              {/* Post 2 */}
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="/blog2.jpg"
                  alt="Exploring new ways of decorating"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">
                    Admin • 14 Oct 2022 • Handmade
                  </p>
                  <h2 className="text-xl font-semibold mt-2">
                    Exploring new ways of decorating
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a href="#" className="text-blue-500 mt-4 block">
                    Read more
                  </a>
                </div>
              </div>
    
              {/* Post 3 */}
              <div className="bg-white shadow rounded overflow-hidden">
                <img
                  src="/blog3.jpg"
                  alt="Handmade pieces that took time to make"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">
                    Admin • 14 Oct 2022 • Wood
                  </p>
                  <h2 className="text-xl font-semibold mt-2">
                    Handmade pieces that took time to make
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                  </p>
                  <a href="#" className="text-blue-500 mt-4 block">
                    Read more
                  </a>
                </div>
              </div>
            </div>
    
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-semibold">Search</h3>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
    
              {/* Categories */}
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-semibold">Categories</h3>
                <ul className="mt-4 space-y-2">
                  <li>Crafts (2)</li>
                  <li>Design (8)</li>
                  <li>Handmade (7)</li>
                  <li>Interior (1)</li>
                  <li>Wood (3)</li>
                </ul>
              </div>
    
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded shadow">
                <h3 className="text-lg font-semibold">Recent Posts</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center space-x-4">
                    <img
                      src="/blog1.jpg"
                      alt="Recent Post"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Going all-in with millennial design
                      </p>
                      <p className="text-xs text-gray-500">14 Oct 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <img
                      src="/blog2.jpg"
                      alt="Recent Post"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Exploring new ways of decorating
                      </p>
                      <p className="text-xs text-gray-500">14 Oct 2022</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <img
                      src="/blog3.jpg"
                      alt="Recent Post"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        Handmade pieces that took time to make
                      </p>
                      <p className="text-xs text-gray-500">14 Oct 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </main>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-wrap justify-between">
                <p>© 2022 Meubel House. All rights reserved.</p>
                <div className="text-gray-400 text-sm">
                  Free Delivery | 90 Days Return | Secure Payment
                </div>
              </div>
            </div>
          </footer>
        </div>
  )
}

export default Page