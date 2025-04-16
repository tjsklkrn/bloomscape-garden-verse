
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

// For demonstration purposes, we'll use a sample cart
const sampleCart = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 1 },
  { productId: 6, quantity: 3 },
];

const Cart = () => {
  // Find product details for cart items
  const cartItems = sampleCart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return {
      ...item,
      product,
      price: product ? (product.discountPrice || product.price) : 0,
    };
  });

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-garden-800 mb-6">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 text-sm font-medium text-garden-600">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>
                <Separator className="mb-4 hidden md:block" />

                {cartItems.map((item) => (
                  <div key={item.productId} className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center gap-4">
                        <div className="h-20 w-20 bg-garden-50 rounded-md overflow-hidden shrink-0">
                          <img
                            src={item.product?.image}
                            alt={item.product?.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-garden-800">
                            {item.product?.name}
                          </h3>
                          <p className="text-sm text-garden-500">
                            {item.product?.category}
                          </p>
                          <button className="flex items-center gap-1 text-sm text-garden-600 hover:text-garden-800 mt-1 md:hidden">
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-center md:text-garden-800">
                        <div className="flex justify-between md:block">
                          <span className="md:hidden text-garden-600">Price:</span>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center gap-2">
                          <button className="h-8 w-8 rounded-full border border-garden-200 flex items-center justify-center text-garden-600 hover:bg-garden-50">
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button className="h-8 w-8 rounded-full border border-garden-200 flex items-center justify-center text-garden-600 hover:bg-garden-50">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-center font-medium text-garden-800">
                        <div className="flex justify-between md:block">
                          <span className="md:hidden text-garden-600">Total:</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="hidden md:flex md:col-span-12 justify-end">
                        <button className="flex items-center gap-1 text-sm text-garden-600 hover:text-garden-800">
                          <Trash2 size={14} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}

                <div className="flex justify-between mt-6">
                  <Link to="/shop">
                    <Button
                      variant="outline"
                      className="text-garden-700 border-garden-300 hover:bg-garden-50"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-garden-700 border-garden-300 hover:bg-garden-50"
                  >
                    Update Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium text-garden-800 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-garden-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-garden-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium text-garden-800">Total</span>
                    <span className="font-bold text-garden-800">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/checkout">
                    <Button className="w-full bg-garden-600 hover:bg-garden-700 text-white">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-garden-700 mb-2">
                    We Accept
                  </h3>
                  <div className="flex gap-2">
                    {["Visa", "Mastercard", "Amex", "PayPal"].map((method) => (
                      <div
                        key={method}
                        className="h-8 px-2 bg-garden-50 rounded flex items-center justify-center text-xs text-garden-600"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-medium text-garden-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-garden-600 mb-6">
              Looks like you haven't added any plants to your cart yet.
            </p>
            <Link to="/shop">
              <Button className="bg-garden-600 hover:bg-garden-700 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
