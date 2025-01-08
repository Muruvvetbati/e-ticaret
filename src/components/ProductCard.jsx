import React from 'react';
import desktopShop from "../assets/desktop-shop-header-1.png";


export default function ProductCard() {
  return (
    <div
      className="border rounded-lg p-4 flex flex-col items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${desktopShop})`,
        width: '100%',
        height: '900px', 
      }}
    >
    </div>
  );
}
