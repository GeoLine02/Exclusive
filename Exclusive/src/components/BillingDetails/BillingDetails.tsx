import { ChangeEvent, MouseEvent, useState } from "react";

type BillingDetailsType = {
  firstName: string;
  lastName: string;
  address: string;
  townOrCity: string;
  phone: string;
};

const BillingDetails = () => {
  const [saveDetails, setSaveDetails] = useState<boolean>(false);
  const [billingDetails, setBillingDetails] = useState<BillingDetailsType>({
    firstName: "",
    lastName: "",
    address: "",
    townOrCity: "",
    phone: "",
  });

  console.log(billingDetails);

  const handlePlaceOrder = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (saveDetails) {
      localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    }
  };

  const detailsOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="lg:flex justify-between">
      <div>
        <p className="text-gray-300 font font-medium">
          Account / My Account / View Cart /
          <span className="text-black">Checkout</span>
        </p>
        <div className="w-fit">
          <h1 className="text-3xl font-medium">Billing Details</h1>
          <form className="w-full">
            <div>
              <label htmlFor="firstName">First Name</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="firstName"
                onChange={detailsOnChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="lastName"
                onChange={detailsOnChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="address"
                onChange={detailsOnChange}
                required
              />
            </div>
            <div>
              <label htmlFor="town/city">Town/City</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="townOrCity"
                onChange={detailsOnChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="phone"
                onChange={detailsOnChange}
                required
              />
            </div>
            <div className="mt-3">
              <input
                onClick={() => {
                  setSaveDetails(!saveDetails);
                }}
                type="checkbox"
              />
              <span>Save this information for faster check-out next time</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="text-white bg-[#DB4444] px-5 py-3 rounded-sm"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
