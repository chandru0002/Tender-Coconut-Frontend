import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/Productcard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-semibold text-green-600">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-semibold text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-wider text-green-600">
            Our Products
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Fresh Tender Coconut
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Check today's available tender coconut and place your order easily.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              No products available today.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;