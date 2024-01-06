const BillingDetails = () => {
  return (
    <div className="lg:flex justify-between">
      <div>
        <p className="text-gray-300 font font-medium">
          Account / My Account / View Cart /
          <span className="text-black">Checkout</span>
        </p>
        <div className="w-fit">
          <h1 className="text-3xl font-medium">Billing Details</h1>
          <div className="w-full">
            <div>
              <label htmlFor="firstName">First Name</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="firstName"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="lastName"
              />
            </div>
            <div>
              <label htmlFor="address">Address</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="address"
              />
            </div>
            <div>
              <label htmlFor="town/city">Town/City</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="town/city"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label> <br />
              <input
                className="bg-gray-100 w-full h-11"
                type="text"
                name="phoneNumber"
              />
            </div>
            <div className="mt-3">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
