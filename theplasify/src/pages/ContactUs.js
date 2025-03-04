import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactImg from '../assest/contact1.jpg'

function ContactUs() {
  const [contactData, setContactData] = useState(null);

  // Fetch contact data from the API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get("https://api.theplacify.com/api/contact/getAll");
        if (response.data && response.data.length > 0) {
          setContactData(response.data[0]); // Assuming only one contact section exists
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  // Render loading state if data is not yet available
  if (!contactData) {
    return <div>Loading...</div>;
  }

  const { header, addresses, phones, fax } = contactData;

  return (
    <div className="px-0 lg:px-20 bg-[#f1f1f1]">



      <div className="bg-white min-h-screen ">
        {/* Header Section */}
      

        <div
          className="relative w-[100%] mx-auto h-72 bg-cover bg-center"
          style={{
            // backgroundImage: `url('https://api.theplacify.com/${header.image.replace("\\", "/")}')`,
            backgroundImage: `url(${ContactImg})`,
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-32 bg-black/60 transform -translate-y-1/2 flex items-center justify-start pl-11">
            <h1 className="text-white text-5xl font-bold">
              {/* {careerData.title.replace(/"/g, "")} */}
              Contact US
            </h1>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509423!2d-74.40806258468268!3d40.59833027934498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzgnMzYnMjQuMSJOIDc0wrAyNCcyOS4xIlc!5e0!3m2!1sen!2sus!4v1692033745798!5m2!1sen!2sus"
              title="Google Map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Image Section with Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
            {/* Address Section */}
            <div>
              <img
                src="https://softstandard.com/wp-content/uploads/2016/05/icon1.jpg"
                alt="Address"
                className="mx-auto w-20 h-20"
              />
              <h3 className="text-lg font-semibold mt-2">Address</h3>
              <div className="mt-4 text-left">
                {addresses.map((address, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-bold">{address.title}:</h4>
                    <p>{address.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Section */}
            <div>
              <img
                src="https://softstandard.com/wp-content/uploads/2016/05/icon2.jpg"
                alt="Phone"
                className="mx-auto w-20 h-20"
              />
              <h3 className="text-lg font-semibold mt-2">Phone</h3>
              <div className="mt-4 text-left">
                {phones.map((phone, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-bold">{phone.title}:</h4>
                    <p>{phone.number}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fax Section */}
            <div>
              <img
                // src="https://softstandard.com/wp-content/uploads/2016/05/icon3.jpg"
                src="data:image/png;base64,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"
                alt="Fax"
                className="mx-auto w-20 h-20"
              />
              <h3 className="text-lg font-semibold mt-2">Email</h3>
              <div className="mt-4 text-left">
                <h4 className="font-bold">Email:</h4>
                <p>{fax}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name (required)"
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email (required)"
                className="border border-gray-300 rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Website"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
            <textarea
              placeholder="Comment..."
              className="border border-gray-300 rounded-lg p-2 w-full h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-600 transition"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>

      {/* Commitment Section */}
      {/* <div className="bg-[#00BFB3] text-white text-center py-8">
        <p className="text-lg font-medium max-w-4xl mx-auto">
          Theplacify demonstrates its commitment to quality and cost, not
          just by <span className="font-bold italic">“words”</span>, but by
          actions and results.
        </p>
      </div> */}
      <div className="bg-[#00BFB3] text-white text-center  py-16">
        <p className="text-3xl font-normal max-w-4xl mx-auto leading-relaxed">
          Theplacify demonstrates its commitment to quality and cost, not
          just by <span className="font-bold italic">“words”</span>, but by
          actions and results.
        </p>
      </div>

    </div>
  );
}

export default ContactUs;


















































































































































