import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { billingSchema } from "../../schemas/billingSchema";
import Button from "../ui/Button";
import PaymentSuccessMessage from "../PaymentSuccessMessage/PaymentSuccessMessage";

type BillingDetailsType = {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  townOrCity: string;
};

const BillingDetails = () => {
  const [saveDetails, setSaveDetails] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [userBillingDetails, setUserBillingDetails] =
    useState<BillingDetailsType | null>(null);

  useEffect(() => {
    const billingDetails = localStorage.getItem("billingDetails");

    if (billingDetails) {
      const parsedDetails = JSON.parse(billingDetails);
      setUserBillingDetails(parsedDetails);
    }
  }, []);

  const onOrderPlace = () => {
    setSubmit(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) => {
    setSubmit(true);
    if (saveDetails) {
      localStorage.setItem("billingDetails", JSON.stringify(values));
    }
    resetForm();
  };
  const {
    handleBlur,
    handleChange,
    resetForm,
    isSubmitting,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      townOrCity: "",
      phone: "",
    },
    validationSchema: billingSchema,
    onSubmit,
  });

  const onEdit = () => {};

  if (submit) {
    return <PaymentSuccessMessage />;
  } else {
    return (
      <div className="lg:flex justify-between">
        <div>
          <p className="text-gray-300 font font-medium">
            Account / My Account / View Cart /
            <span className="text-black">Checkout</span>
          </p>
          <div className="w-fit">
            <h1 className="text-3xl font-medium">Billing Details</h1>
            {userBillingDetails ? (
              <div>
                <div className="rounded-md shadow-gray-400 shadow-md p-2 bg-gray-100 my-4 max-w-72">
                  <p>Frist name: {userBillingDetails.firstName}</p>
                  <p>Last name: {userBillingDetails.lastName}</p>
                  <p>Town/City: {userBillingDetails.townOrCity}</p>
                  <p>Address: {userBillingDetails.address}</p>
                  <p>Phone: {userBillingDetails.phone}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="max-w-36">
                    <Button
                      align="default"
                      onClick={onEdit}
                      textColor="light"
                      type="button"
                      background="red"
                    >
                      edit
                    </Button>
                  </div>
                  <div className="max-w-36">
                    <Button
                      align="default"
                      onClick={onOrderPlace}
                      textColor="light"
                      type="submit"
                      background="red"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div>
                  <label htmlFor="firstName">First Name</label> <br />
                  <input
                    value={values.firstName}
                    className={
                      errors.firstName
                        ? "border-2 border-red-600 w-full h-11"
                        : "bg-gray-100 w-full h-11"
                    }
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div className="error">
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <input
                    value={values.lastName}
                    className={
                      errors.lastName
                        ? "border-2 border-red-600 w-full h-11"
                        : "bg-gray-100 w-full h-11"
                    }
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div>
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </div>
                <div>
                  <label htmlFor="address">Address</label> <br />
                  <input
                    value={values.address}
                    className={
                      errors.address
                        ? "border-2 border-red-600 w-full h-11"
                        : "bg-gray-100 w-full h-11"
                    }
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div>
                    {errors.address && touched.address && errors.address}
                  </div>
                </div>
                <div>
                  <label htmlFor="townOrCity">Town/City</label> <br />
                  <input
                    value={values.townOrCity}
                    className={
                      errors.townOrCity
                        ? "border-2 border-red-600 w-full h-11"
                        : "bg-gray-100 w-full h-11"
                    }
                    type="text"
                    name="townOrCity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div>
                    {errors.townOrCity &&
                      touched.townOrCity &&
                      errors.townOrCity}
                  </div>
                </div>
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label> <br />
                  <input
                    value={values.phone}
                    className={
                      errors.phone
                        ? "border-2 border-red-600 w-full h-11"
                        : "bg-gray-100 w-full h-11"
                    }
                    type="numeric"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <div>{errors.phone && touched.phone && errors.phone}</div>
                </div>
                <div className="mt-3">
                  <input
                    onClick={() => {
                      setSaveDetails(!saveDetails);
                    }}
                    type="checkbox"
                  />
                  <span>
                    Save this information for faster check-out next time
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-[#DB4444] px-5 py-3 rounded-sm"
                >
                  Place Order
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default BillingDetails;
