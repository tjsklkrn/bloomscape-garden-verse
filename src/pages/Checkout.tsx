
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      setLoading(false);
      navigate("/order-confirmation");
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-garden-800 mb-6">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium text-garden-800 mb-4">
                Shipping Information
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-garden-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-garden-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-garden-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-garden-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-garden-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-garden-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-garden-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                </div>

                <Separator className="my-6" />

                <h2 className="text-xl font-medium text-garden-800 mb-4">
                  Payment Information
                </h2>

                <div className="mb-4">
                  <label htmlFor="cardName" className="block text-sm font-medium text-garden-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-garden-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-garden-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-garden-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      className="w-full p-2 border border-garden-200 rounded-md focus:outline-none focus:ring-2 focus:ring-garden-500"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-4 bg-garden-600 hover:bg-garden-700 text-white"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-medium text-garden-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-garden-600">Subtotal</span>
                  <span className="font-medium">$79.97</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-garden-600">Shipping</span>
                  <span className="font-medium">$5.99</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium text-garden-800">Total</span>
                  <span className="font-bold text-garden-800">
                    $85.96
                  </span>
                </div>
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
      </div>
    </Layout>
  );
};

export default Checkout;
