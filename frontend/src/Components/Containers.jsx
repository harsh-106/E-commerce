import { Box, Card, Inset, Text } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router-dom";

export const products = [  
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,999",
    image: "https://cdn.pixabay.com/photo/2018/10/04/05/38/headphone-3722950_1280.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹3,499",
    image: "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,999",
    image: "https://cdn.pixabay.com/photo/2020/08/09/17/07/bose-5476087_1280.jpg",
  },
];

const Containers = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/description/${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Box key={product.id} className="max-w-sm">
          <Card
            size="3"
            className="shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <Inset clip="padding-box" side="top" pb="current">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </Inset>
            <div className="p-4 text-center">
              <Text as="p" size="4" className="font-semibold">
                {product.name}
              </Text>
              <Text as="p" size="3" className="text-green-600 font-bold">
                {product.price}
              </Text>
            </div>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default Containers;
