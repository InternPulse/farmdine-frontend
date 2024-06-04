

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
                <input type="email" name="email" id="email" />
            </div>
        </form>
    </div>
  )
}

export default CheckOut
