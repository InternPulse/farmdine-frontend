import { useState, ChangeEvent, FormEvent } from 'react';
import arrowLeft from '/images/arrow-left.png';
import googlePayLogo from '/images/logos_google-pay.jpg';
import visaLogo from '/images/logos_visa.jpg';
import mastercardLogo from '/images/logos_mastercard.jpg';
import masterIcon from '/images/master-icon.jpg';

// Define the type for form data
interface FormData {
    email: string;
    name: string;
    cardNumber: string;
    expireDate: string;
    cvv: string;
}

const CheckOut = () => {
    
    const [formData, setFormData] = useState<FormData>({
        email: '',
        name: '',
        cardNumber: '',
        expireDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.name) {
            newErrors.name = 'Name on card is required';
        }
        if (!/^\d{2}\/\d{4}$/.test(formData.expireDate)) {
            newErrors.expireDate = 'Invalid expiration date format (MM/YYYY)';
        }
        if (!formData.cardNumber) {
            newErrors.cardNumber = 'Card number is required';
        }
        if (!formData.cvv) {
            newErrors.cvv = 'CVV is required';
        } else if (formData.cvv.length !== 3) {
            newErrors.cvv = 'CVV must be 3 digits';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) return; 

        setIsLoading(true); 

        try {
            
            const response = await fetch('https://your-payment-gateway.com/process', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            });

            if (response.ok) {
                console.log('Payment successful!'); 
            } else {
                console.error('Payment failed:', await response.text());
               
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="bg-slate-100 w-[600px] p-10 rounded-l-lg">
                <div className="flex mb-6">
                    <img className="w-4 h-5 mr-2 mt-1" src={arrowLeft} alt="left arrow" />
                    <h1 className="font-semibold text-xl">Checkout</h1>
                </div>
                <div>
                    <p>Payment Details</p>
                    <div className="flex space-x-10 my-4 justify-center items-center">
                        <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src={googlePayLogo} alt="Google Pay logo" /></div>
                        <div className="bg-white border px-4 py-4"><img className="h-8 w-20" src={visaLogo} alt="Visa logo" /></div>
                        <div className="bg-white border px-4 py-2"><img className="h-12 w-20" src={mastercardLogo} alt="Mastercard logo" /></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input className="block w-full my-1 pl-2 rounded-md py-1 border outline-none border-slate-500" type="email" name="email" id="email" placeholder="aishastepahnie12@gmail.com" value={formData.email} onChange={handleChange} required />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="name">Name on Card</label>
                        <input className="block w-full my-1 pl-2 rounded-md py-1 border outline-none border-slate-500" type="text" name="name" id="name" placeholder="Aisha Stephanie" value={formData.name} onChange={handleChange} required />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <div className="flex my-1 pl-2 rounded-md bg-white border border-slate-500">
                            <img className="w-7 h-7 pt-1 mt-1 mr-4" src={masterIcon} alt="mastercard logo" />
                            <input className="py-1 outline-none" type="text" name="cardNumber" id="cardNumber" placeholder="3563 8764 2453 092" value={formData.cardNumber} onChange={handleChange} required />
                        </div>
                        {errors.cardNumber && <p className="text-red-500">{errors.cardNumber}</p>}
                    </div>
                    <div className="flex justify-between my-3">
                        <div>
                            <label htmlFor="expireDate">Expire</label>
                            <input className="block mt-1 px-4 py-1 rounded-md border outline-none border-slate-500" type="text" name="expireDate" id="expireDate" placeholder="05/2028" value={formData.expireDate} onChange={handleChange} required />
                            {errors.expireDate && <p className="text-red-500">{errors.expireDate}</p>}
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input className="block mt-1 px-4 py-1 rounded-md border outline-none border-slate-500" type="number" name="cvv" id="cvv" placeholder="***" value={formData.cvv} onChange={handleChange} required />
                            {errors.cvv && <p className="text-red-500">{errors.cvv}</p>}
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
                    <div className="mt-4 flex justify-center items-center">
                        <button className="bg-lime-600 font-semibold px-16 rounded-lg py-1 text-sm text-white hover:bg-lime-500" type="submit" disabled={isLoading}>
                            {isLoading ? 'Processing...' : 'Continue to Checkout'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CheckOut;
