import { FaLocationDot } from "react-icons/fa6";

function ShopLocation() {

  const openLocation = () => {
    window.open(
      "https://maps.app.goo.gl/9ixyC2DcusAgEgnT9",
      "_blank"
    );
  };

  return (
    <section className="bg-white px-6 py-20">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <FaLocationDot className="mx-auto text-4xl text-red-500" />

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Visit Our Shop
          </h2>

          <p className="mt-3 text-gray-600">
            Come and enjoy fresh tender coconut at our shop.
          </p>

          <p className="mt-4 font-semibold text-gray-800">
            📍 Tirunelvelli, Tamil Nadu
          </p>

          <button
            onClick={openLocation}
            className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            View Shop Location
          </button>
          <p className="text-center text-gray-600 mt-2">
            Shop Displayed at D-Mart Opposite. Click the button above to view the location on Google Maps.
          </p>

        </div>

        {/* Map placeholder */}
        <div className="mt-10 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
          
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1234567890123!2d80.2707183152609!3d13.082680890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c8b8b8b8b%3A0x123456789abcdef0!2sYour%20Shop%20Name!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

</div>

      

    </section>
  );
}

export default ShopLocation;