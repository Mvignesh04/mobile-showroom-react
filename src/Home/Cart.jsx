
import React, { useState } from "react";

const Cart = ({ addToCart}) => {
  const [quantities, setQuantities] = useState({});

  const getQuantity = (id) => quantities[id] || 1;
  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: getQuantity(id) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, getQuantity(id) - 1),
    }));
  };

  const total = addToCart.reduce(
    (sum, item) =>
      sum + Number(item.price) * getQuantity(item.id),
    0
  );

  const buy = (item) => {
    console.log("Product:", item.name);
    console.log("Quantity:", getQuantity(item.id));
    console.log(
      "Subtotal:",
      Number(item.price) * getQuantity(item.id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="mb-6 text-3xl font-bold">
        My Cart
      </h1>

      {addToCart.length === 0 ? (
        <p className="rounded-lg bg-white p-6 text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Product list */}
          <div className="space-y-4 lg:col-span-2">
            {addToCart.map((item) => {
              const quantity = getQuantity(item.id); // item 1:1 quality
              const subtotal =item.price * quantity;

              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border
                    bg-white p-4 shadow-sm sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-32 rounded-lg object-contain"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {item.category} / {item.brand}
                    </p>

                    <p className="mt-2 text-gray-700">
                      Price: ₹{item.price}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => decrease(item.id)}
                        disabled={quantity === 1}
                        className="rounded border px-3 py-1
                          disabled:opacity-40"
                      >
                        −
                      </button>

                      <span className="font-medium">
                        {quantity}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="rounded border px-3 py-1"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-3 font-bold text-green-700">
                      Subtotal: ₹{subtotal}
                    </p>

                    <button
                      onClick={() => buy(item)}
                      className="mt-3 rounded-lg bg-red-500
                        px-4 py-2 text-white hover:bg-red-600"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order summary */}
          <div className="h-fit rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">
              Order Summary
            </h2>

            {addToCart.map((item) => (
              <div
                key={item.id}
                className="mb-3 flex justify-between gap-3 text-sm"
              >
                <span>
                  {item.name} × {getQuantity(item.id)}
                </span>

                <span className="whitespace-nowrap">
                  ₹
                  {item.price * getQuantity(item.id)
                  }
                </span>
              </div>
            ))}
            <div className="mb-3 flex justify-between gap-3 text-sm"><span>GST</span>
            <span className="whitespace-nowrap">Free</span></div>
            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => console.log("Checkout total:", total)}
              className="mt-5 w-full rounded-lg bg-green-600
                px-4 py-3 font-semibold text-white
                hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
