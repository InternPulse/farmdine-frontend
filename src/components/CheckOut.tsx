

const CheckOut = () => {
  return (
    <div>
        <h1><img src="" alt="left arrow"/> Checkout</h1>
        <div>
            <p>Payment Details</p>
            <div>
                <img src="" alt="Google pay logo"/>
                <img src="" alt="Visa pay logo"/>
                <img src="" alt="Master card pay logo"/>
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
  )
}

export default CheckOut
