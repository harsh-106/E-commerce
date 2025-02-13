import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Text } from "@radix-ui/themes";
import { products } from "./Containers"; // Import products
import Navbar from "./Navbar";

const Description = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center text-red-500 mt-10">Product not found</h1>;
  }

  return (
    <div>
     
      <Navbar />

     
      <div className="flex flex-row gap-10 p-10">
        
        <div className="w-1/3 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-96 border border-gray-300 rounded-lg"
          />
          <div className="flex flex-row gap-4 mt-6">
            <Button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
              Buy Now
            </Button>
            <Button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
              Add to Cart
            </Button>
          </div>
        </div>

       
        <div className="w-2/3 p-6">
          <Text as="h1" size="7" className="font-bold text-gray-900">
            {product.name}
          </Text>
          <Text as="p" size="6" className="text-green-600 font-bold my-2">
            {product.price}
          </Text>
          <Text as="p" size="4" className="text-gray-700 mt-4">
            Experience high-quality sound with the latest {product.name}. Built for comfort, durability, and superior audio performance.
            Ideal for music lovers, fitness enthusiasts, and professionals alike.
          </Text>
          <Text as="p" size="4" className="text-gray-600 mt-2">
            ✅ High-quality build <br />
            ✅ Long battery life <br />
            ✅ Bluetooth connectivity <br />
            ✅ 1-year warranty
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Description;
