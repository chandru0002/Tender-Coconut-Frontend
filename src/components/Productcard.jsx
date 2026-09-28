import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


function ProductCard({ product }) {

  const isAvailable =
    product.available && product.quantity > 0;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {product.name}
        </h2>

        <p className="mt-2 text-gray-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <p className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </p>

          <p className="text-sm text-gray-500">
            per coconut
          </p>

        </div>

        <div className="mt-4">

          {isAvailable ? (
            <p className="font-medium text-green-600">
              🟢 Available Today: {product.quantity}
            </p>
          ) : (
            <p className="font-medium text-red-600">
              🔴 Today's coconut is finished
            </p>
          )}

        </div>

        {isAvailable && (
          <Link
            to="/order"
            state={{ product }}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <FaShoppingCart />
            Order Now
          </Link>
        )}

      </div>
    </div>
  );
}

export default ProductCard;