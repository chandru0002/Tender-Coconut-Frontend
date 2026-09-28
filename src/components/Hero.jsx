import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import Tendercoconut from "../assets/Tender-cocount2.jpg";




function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-200/40 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500"></span>
            <span className="text-sm font-semibold text-green-700">
              Fresh Tender Coconut Available Everyday
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Fresh Tender
            <span className="block text-green-600">
              Coconut
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
            Enjoy naturally refreshing tender coconut with
            fresh taste and quality. Choose your favourite
            coconut and place your order easily.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <Link
              to="/products"
              className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >
              <FaShoppingCart />
              View Products
            </Link>

            <Link
              to="/order"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-green-600 bg-white px-7 py-4 font-bold text-green-700 transition duration-300 hover:bg-green-50"
            >
              Order Now
              <FaArrowRight />
            </Link>

          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">

            <div>
              <p className="text-2xl font-bold text-green-600">
                100%
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Fresh
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">
                🥥
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Natural
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">
                ⚡
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Easy Order
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Main Image Background */}
          <div className="relative h-[420px] w-[420px] max-w-full overflow-hidden rounded-[40%] bg-green-200 shadow-2xl sm:h-[500px] sm:w-[500px]">

            <img
              src={Tendercoconut}
              alt="Fresh Tender Coconut"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

          </div>

          {/* Floating Price Card */}
          <div className="absolute bottom-8 left-2 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-0">
            <p className="text-sm text-gray-500">
              Price
            </p>
            <p className="text-2xl font-bold text-green-600">
              ₹30
              <span className="text-sm font-medium text-gray-500">
                {" "} / Tender coconut
              </span>
            </p>
          </div>

          {/* Floating Fresh Badge */}
          <div className="absolute right-0 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <p className="text-2xl">🥥</p>
            <p className="font-bold text-gray-800">
              Fresh & Natural
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;