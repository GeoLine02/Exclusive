import { useEffect, useState } from "react";
import Button from "../ui/Button";
import PaymentSuccessMessage from "../PaymentSuccessMessage/PaymentSuccessMessage";
import BillingForm from "./BillingForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { clearCartAction } from "../../features/productSlice/productSlice";
import { BillingDetailsType } from "../../types/billing";

const BillingDetails = () => {
  const [saveDetails, setSaveDetails] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [userBillingDetails, setUserBillingDetails] =
    useState<BillingDetailsType | null>(null);
  const [formType, setFormType] = useState<"new" | "edit">("new");
  const dispatch = useDispatch<AppDispatch>();
  const billingDetails = localStorage.getItem("billingDetails");
  useEffect(() => {
    if (billingDetails) {
      const parsedDetails = JSON.parse(billingDetails);
      setUserBillingDetails(parsedDetails);
    }
  }, [billingDetails]);

  const onOrderPlace = () => {
    setSubmit(true);
    dispatch(clearCartAction());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: any) => {
    setSubmit(true);
    dispatch(clearCartAction());
    localStorage.removeItem("cart");
    if (saveDetails) {
      localStorage.setItem("billingDetails", JSON.stringify(values));
    }
  };

  const onEdit = () => {
    setFormType("edit");
  };

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
            {userBillingDetails && formType === "new" && (
              <div>
                <div className="rounded-md shadow-gray-400 shadow-md p-2 bg-gray-100 my-4 max-w-72">
                  <p>First name: {userBillingDetails.firstName}</p>
                  <p>Last name: {userBillingDetails.lastName}</p>
                  <p>Town/City: {userBillingDetails.townOrCity}</p>
                  <p>Address: {userBillingDetails.address}</p>
                  <p>Phone: {userBillingDetails.phoneNumber}</p>
                </div>
                <div className="flex gap-6">
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
            )}
            {!userBillingDetails && formType === "new" && (
              <BillingForm
                type={formType}
                saveDetails={saveDetails}
                setSaveDetails={setSaveDetails}
                onSubmit={onSubmit}
              />
            )}
            {billingDetails && formType === "edit" && (
              <BillingForm
                type={formType}
                saveDetails={saveDetails}
                setSaveDetails={setSaveDetails}
                onSubmit={onSubmit}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default BillingDetails;
