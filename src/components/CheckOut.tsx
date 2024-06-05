

const CheckOut = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-slate-100 w-[600px] p-10 rounded-l-lg">
            <div className="flex mb-6"><img className="w-4 h-5 mr-2 mt-1" src="src/assets/arrow-left.png" alt="left arrow"/><h1 className="font-semibold text-xl">Checkout</h1></div>
            <div>
                <p>Payment Details</p>
                <div className="flex space-x-16 my-4 justify-center items-center">
                    <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src="src/assets/logos_google-pay.jpg" alt="Visa pay logo"/></div>
                    <div className="bg-white border px-4 py-2"><img className="h-12 w-20" src="src/assets/logos_mastercard.jpg" alt="Google pay logo"/></div>
                    <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src="src/assets/logos_visa.jpg" alt="Master card pay logo"/></div>
                </div>
            </div>
            <form action="#">
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="aishastepahnie12@gmail.com"/>
                </div>
                <div>
                    <label htmlFor="name">Name on Card</label>
                    <input type="text" name="name" id="name" placeholder="Aisha Stephanie" />
                </div>
                <div>
                    <label htmlFor="card-number">Card Number</label>
                    <div><img src="" alt=""/><input type="number" name="card-number" id="card-number" /></div>
                </div>
                <div>
                    <div>
                        <label htmlFor="date">Expire</label>
                        <input type="date" name="date" id="date" placeholder="05/2028" />
                    </div>
                    <div>
                        <label htmlFor="number">CVV</label>
                        <input type="number" name="number" id="number" placeholder="***" />
                    </div>
                </div>
                <div>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div>
                    <p>Subtotal</p>
                    <p>$50.00</p>
                </div>
                <hr />
                <div>
                    <p>Total</p>
                    <p>$50.00</p>
                </div>
                <button type="button">Continue to Checkout</button>
            </form>
        </div>
    </div>
  )
}

export default CheckOut
