import React from "react";

const NavBar = () => {
  return (
    <>
      {/* FIRST ROW */}
      <nav className="fixed top-0 z-30 w-full  bg-white h-45 border-b border-gray-300">
        <div className="w-450  flex justify-between ml-60   items-center px-8 py-4">
          <img src="/bblogo.png" alt="BigBasket" className="h-14 hover:cursor-pointer" />
        
            <img src="./search" alt="" className="h-5 absolute top-9 left-130 " />
          <input type="text" placeholder="         Search for products" 
               className=" w-2xl  px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
                     
            <a className="text-2xl font-medium hover:text-green-600 hover:cursor-pointer">Home</a>
            <a className="text-2xl font-medium hover:text-green-600 hover:cursor-pointer">Delivery in 10 mins</a>
            <button className="bg-black text-white text-1xl font-medium w-35 h-15 rounded-lg hover:cursor-pointer">
              Login / Sign Up
            </button>
            <img src="/cart.jpg" alt="Cart" className="h-12 cursor-pointer " /> <br/>
            </div>
              <div>
         <div className="relative group px-4 cursor-pointer ml-60 mt-5 flex gap-10 gap-y-10 max-w-screen-3xl  hover:text-green-600">
            <div className="flex  items-center w-45 pl-5 text-1xl font-bold h-12 rounded text-center text-white  bg-green-600 gap-1">
              <span className="text-xs">Shop by</span> Category <span>▼</span>
            </div>

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-xl border mt-2 z-50">
              <ul className="w-64 border-r">
                <li className="relative group/item px-6 py-3 hover:bg-gray-100">
                  Fruits & Vegetables
                  <div className="absolute top-0 left-full hidden group-hover/item:block bg-white shadow-xl w-64">
                    <ul>
                      <li className="px-6 py-2 hover:bg-gray-100">Fresh Fruits</li>
                      <li className="px-6 py-2 hover:bg-gray-100">Fresh Vegetables</li>
                      <li className="px-6 py-2 hover:bg-gray-100">Exotics</li>
                    </ul>
                  </div>
                </li>
                <li className="px-6 py-3 hover:bg-gray-100">Dairy & Bakery</li>
                <li className="px-6 py-3 hover:bg-gray-100">Snacks & Foods</li>
              </ul>
            </div>
             <a className="px-4 text-2xl font-light hover:text-green-600">Exotic Fruits & Veggies</a>
          <a className="px-4 text-2xl font-light hover:text-green-600">Tea</a>
          <a className="px-4 text-2xl font-light hover:text-green-600">Ghee</a>
          <a className="px-4 text-2xl font-light hover:text-green-600">Nandini</a>
          <a className="px-4 text-2xl  font-semibold text-green-700">Smart Basket</a>
          <a className="px-4 text-2xl font-semibold text-red-600">Offers</a>
          </div>
                
          
              </div>
          
       
        
      </nav>

    </>
  );
};

export default NavBar;
