
import React, { useContext } from 'react';
import { Storecontext } from '../../context/Storecontext';

const Placeorder = () => {
  const { getTotalamount } = useContext(Storecontext);

  return (<>
    <h2 className="text-2xl font-semibold mb-6 text-center text-amber-600 ">Proceed to Payment</h2>
    <div className=" mx-auto shadow-lg rounded-2xl p-6 mt-10 justify-evenly flex gap-[50px] max-md:flex-col">
      

      <form className="space-y-4 ">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
        </div>

        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street</label>
          <input type="text" id="street" name="street" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input type="text" id="zip" name="zip" required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-700 focus:border-amber-700" />
          </div>
        </div>

        
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">Delivery Type</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input type="radio" name="delivery" value="online" required className=" focus:ring-amber-700 focus:border-amber-700e-600 focus:ring-bltext-blue-500 mr-2" />
              <span className="text-gray-700">Online Transaction</span>
            </div>
            <div className="flex items-center">
              <input type="radio" name="delivery" value="cod" required className=" focus:ring-amber-700 focus:border-amber-700 mr-2" />
              <span className="text-gray-700">Cash on Delivery</span>
            </div>
          </div>
        </div>

        
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
          <textarea id="address" name="address" rows="3" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700  focus:border-transparent"></textarea>
        </div>
      </form>

      
      <div className="mt-8 ml-10 w-70">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Cart Totals</h2>

          <div className="flex justify-between font-bold">
            <p>Subtotal</p>
            <p>${getTotalamount()}</p>
          </div>
          <hr />

          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${getTotalamount() ? 5 : 0}</p>
          </div>
          <hr />

          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>${getTotalamount() ? getTotalamount() + 5 : 0}</p>
          </div>
          <hr />

          <button className="bg-amber-600 text-white rounded-2xl p-2 hover:bg-amber-500 hover:cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Placeorder;
