import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaWhatsapp,
  FaPlus,
  FaMinus
} from "react-icons/fa";

function OrderForm() {

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Product loading error:", error);
      });
  }, []);

  const addProduct = (product) => {
    setSelectedProducts((previous) => ({
      ...previous,
      [product.id]: 1
    }));
  };

  const removeProduct = (productId) => {
    setSelectedProducts((previous) => {
      const updated = { ...previous };

      delete updated[productId];

      return updated;
    });
  };

  const increaseQuantity = (product) => {
    const currentQuantity =
      selectedProducts[product.id] || 0;

    if (currentQuantity < product.quantity) {
      setSelectedProducts((previous) => ({
        ...previous,
        [product.id]: currentQuantity + 1
      }));
    }
  };

  const decreaseQuantity = (product) => {
    const currentQuantity =
      selectedProducts[product.id] || 0;

    if (currentQuantity > 1) {
      setSelectedProducts((previous) => ({
        ...previous,
        [product.id]: currentQuantity - 1
      }));
    } else {
      removeProduct(product.id);
    }
  };

  const selectedItems = products.filter(
    (product) => selectedProducts[product.id]
  );

  const totalItems = selectedItems.reduce(
    (total, product) =>
      total + selectedProducts[product.id],
    0
  );

  const totalPrice = selectedItems.reduce(
    (total, product) =>
      total +
      product.price * selectedProducts[product.id],
    0
  );

  const handleOrder = async (e) => {
    e.preventDefault();

    if (selectedItems.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    const items = selectedItems.map((product) => ({
      productName: product.name,
      price: product.price,
      quantity: selectedProducts[product.id]
    }));

    const order = {
      customerName: name,
      phone: phone,
      items: items,
      totalAmount: totalPrice
    };

    try {

      // Save order to backend
      const response = await axios.post(
        "http://localhost:8080/api/orders",
        order
      );

      console.log("Order saved:", response.data);

      // Seller WhatsApp number
      const sellerNumber = "917904802289";

      let productMessage = "";

      selectedItems.forEach((product) => {

        const quantity =
          selectedProducts[product.id];

        const amount =
          product.price * quantity;

        productMessage += `
🥥 ${product.name}
Price: ₹${product.price}
Quantity: ${quantity}
Amount: ₹${amount}
`;
      });

      const message = `
🥥 NEW TENDER COCONUT ORDER

Customer Name: ${name}
Customer Phone: ${phone}

ORDER DETAILS:
${productMessage}

------------------------
Total Items: ${totalItems}
Total Amount: ₹${totalPrice}
------------------------
`;

      // Open WhatsApp
      const whatsappURL =
        `https://wa.me/${sellerNumber}?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        whatsappURL,
        "_blank"
      );

    } catch (error) {

      console.error(
        "Order error:",
        error
      );

      alert(
        "Unable to place order. Please try again."
      );
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <div className="mb-8 text-center">

          <p className="font-semibold uppercase tracking-wider text-green-600">
            Your Orders
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Choose Your Tender Coconut
          </h1>

          <p className="mt-3 text-gray-600">
            Select one or more Tender Coconuts and choose the quantity.
          </p>

        </div>


        {/* Products */}

        <div className="grid gap-6 md:grid-cols-2">

          {products.map((product) => {

            const selected =
              selectedProducts[product.id] || 0;

            const unavailable =
              !product.available ||
              product.quantity <= 0;

            return (

              <div
                key={product.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">

                  <h2 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-1 font-semibold text-green-600">
                    ₹{product.price} / coconut
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Available: {product.quantity}
                  </p>

                  {unavailable ? (

                    <p className="mt-4 font-semibold text-red-600">
                      🔴 Today's coconut is finished
                    </p>

                  ) : selected === 0 ? (

                    <button
                      type="button"
                      onClick={() =>
                        addProduct(product)
                      }
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
                    >
                      <FaPlus />
                      Add Product
                    </button>

                  ) : (

                    <div className="mt-4 flex items-center justify-between rounded-lg bg-green-50 p-3">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(product)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white"
                      >
                        <FaMinus />
                      </button>

                      <span className="text-lg font-bold">
                        {selected}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(product)
                        }
                        disabled={
                          selected >= product.quantity
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white disabled:bg-gray-400"
                      >
                        <FaPlus />
                      </button>

                    </div>

                  )}

                </div>

              </div>
            );
          })}

        </div>


        {/* Customer Form */}

        <form
          onSubmit={handleOrder}
          className="mt-8 rounded-2xl bg-white p-6 shadow-lg"
        >

          <h2 className="text-2xl font-bold">
            Customer Details
          </h2>


          {/* Name */}

          <div className="mt-5">

            <label className="mb-2 block font-semibold">
              Your Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

          </div>


          {/* Phone */}

          <div className="mt-5">

            <label className="mb-2 block font-semibold">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="Enter your phone number"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

          </div>


          {/* Summary */}

          <div className="mt-6 rounded-xl bg-green-50 p-5">

            <h3 className="text-lg font-bold">
              Order Summary
            </h3>

            <div className="mt-3 flex justify-between">

              <span>Total Items</span>

              <span className="font-semibold">
                {totalItems}
              </span>

            </div>

            <div className="mt-2 flex justify-between">

              <span>Total Amount</span>

              <span className="text-xl font-bold text-green-600">
                ₹{totalPrice}
              </span>

            </div>

          </div>


          {/* WhatsApp Button */}

          <button
            type="submit"
            disabled={
              selectedItems.length === 0
            }
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 disabled:bg-gray-400"
          >

            <FaWhatsapp size={22} />

            Place Order & Send WhatsApp

          </button>

        </form>

      </div>

    </section>
  );
}

export default OrderForm;