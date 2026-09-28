import {
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-wider text-green-600">
            Contact Us
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Get In Touch
          </h1>

        </div>

     <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Phone */}
          <div className="rounded-2xl bg-white p-8 text-center shadow">

            <FaPhone className="mx-auto text-3xl text-green-600" />

            <h2 className="mt-4 text-xl font-bold">
              Phone
            </h2>

        
            <p className="mt-2 text-gray-600">
              9976715134
              
            </p>

          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl bg-white p-8 text-center shadow">

            <FaWhatsapp className="mx-auto text-3xl text-green-600" />

            <h2 className="mt-4 text-xl font-bold">
              WhatsApp
            </h2>

            <p className="mt-2 text-gray-600">
              6382755184
            </p>

          </div>

          {/* Location */}
          <div className="rounded-2xl bg-white p-8 text-center shadow">

            <FaLocationDot className="mx-auto text-3xl text-red-500" />

            <h2 className="mt-4 text-xl font-bold">
              Location
            </h2>

            <p className="mt-2 text-gray-600">
              Tirunelvelli, Tamil Nadu
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;