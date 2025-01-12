import React from 'react';

function Contactus() {
  return (
    <div>
      <section className="text-gray-600 body-font relative bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Company Overview Section */}
            <div className="lg:w-2/3 md:w-1/2 p-4">
              <div className="h-full bg-gradient-to-r from-indigo-100 to-white p-8 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold text-indigo-600 uppercase mb-3">Our Story</h2>
                <p className="leading-relaxed mb-4 text-gray-700">
                  Welcome to our company! We pride ourselves on delivering top-notch services and products. Our commitment to quality and customer satisfaction has been unwavering since our inception.
                </p>
                <h3 className="text-lg font-semibold text-indigo-600 uppercase mt-6">Contact Info</h3>
                <p className="text-gray-700">Email: example@email.com</p>
                <p className="text-gray-700">Phone: 123-456-7890</p>
              </div>
            </div>

            {/* Feedback Form Section */}
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="h-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Feedback</h2>
                <p className="leading-relaxed text-gray-600 mb-6">
                  We value your feedback. Please share your thoughts with us!
                </p>
                <form>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 transition duration-200"
                    />
                  </div>
                  <div className="relative mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 h-32 resize-none transition duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-indigo-600 hover:bg-indigo-700 w-full py-3 rounded-lg text-lg font-medium transition duration-300"
                  >
                    Submit
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Your feedback helps us improve and serve you better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
