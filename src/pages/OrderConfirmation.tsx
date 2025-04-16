
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `GV-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-garden-600" />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-garden-800 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg text-garden-600 mb-6">
            Your order has been received and is being processed.
          </p>
          
          <div className="bg-garden-50 rounded-lg p-4 mb-8">
            <p className="text-garden-700 mb-1">Order Number:</p>
            <p className="text-xl font-bold text-garden-800">{orderNumber}</p>
          </div>
          
          <p className="text-garden-600 mb-8">
            A confirmation email has been sent to your email address. We'll notify you when your order ships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-garden-600 hover:bg-garden-700 text-white">
                Continue Shopping
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-garden-300 text-garden-700">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
