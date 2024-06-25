import { useState } from "react";


const CheckOut = () => {
    const [errors, setErrors] = useState({});

    const validateForm = (event: {
        target: any; preventDefault: () => void; 
}) => {
        event.preventDefault(); // Prevent default form submission behavior
        const newErrors = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.email.value)) {
            newErrors.email = 'Please enter a valid email address';
        }

    }  
  return (
    <div className="flex justify-center items-center">
        <div className="bg-slate-100 w-[600px] p-10 rounded-l-lg">
            <div className="flex mb-2"><img className="w-4 h-5 mr-2 mt-1" src="src/assets/arrow-left.png" alt="left arrow"/><h1 className="font-semibold text-xl">Checkout</h1></div>
            <div>
                <p>Payment Details</p>
                <div className="flex space-x-10 justify-center my-2 items-center">
                    <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src="src/assets/logos_google-pay.jpg" alt="Visa pay logo"/></div>
                    <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src="src/assets/logos_visa.jpg" alt="Master card pay logo"/></div>
                    <div className="bg-white border px-4 py-2"><img className="h-12 w-20" src="src/assets/logos_mastercard.jpg" alt="Google pay logo"/></div>
                </div>
            </div>
            <form action="#">
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input className="block w-full my-1 pl-2 rounded-md py-1 border outline-none border-slate-500" type="email" name="email" id="email" placeholder="aishastepahnie12@gmail.com"/>
                </div>
                <div>
                    <label htmlFor="name">Name on Card</label>
                    <input className="block w-full my-1 pl-2 rounded-md py-1 border outline-none border-slate-500" type="text" name="name" id="name" placeholder="Aisha Stephanie" />
                </div>
                <div>
                    <label htmlFor="card-number">Card Number</label>
                    <div className="flex my-1 pl-2 rounded-md bg-white border border-slate-500"><img className="w-7 h-7 pt-1 mt-1 mr-4" src="src/assets/master-icon.jpg" alt="mastercard logo"/><input className="py-1 outline-none" type="text" name="card-number" id="card-number" placeholder="3563 8764 2453 092"/></div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <label htmlFor="date">Expire</label>
                        <input className="block mt-1 px-4 py-1 rounded-md border outline-none border-slate-500" type="text" name="date" id="date" placeholder="05/2028" />
                    </div>
                    <div>
                        <label htmlFor="number">CVV</label>
                        <input className="block mt-1 px-4 py-1 rounded-md border outline-none border-slate-500" type="number" name="number" id="number" placeholder="***" />
                    </div>
                </div>
                <div className="flex justify-between mt-4 font-bold">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between py-1 font-semibold border-b-2">
                    <p>Subtotal</p>
                    <p>$50.00</p>
                </div>
                
                <div className="flex justify-between py-1 font-semibold">
                    <p>Total</p>
                    <p>$50.00</p>
                </div>
                <div className="mt-4 flex justify-center items-center"><button className="bg-lime-600 font-semibold px-16 rounded-lg py-1 text-sm text-white hover:bg-lime-500"  type="button">Continue to Checkout</button></div>
            </form>
        </div>
    </div>
  )
}

export default CheckOut
