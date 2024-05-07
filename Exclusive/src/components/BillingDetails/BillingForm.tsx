import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button";

interface BillingFormPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: any) => void;
  type: string;
  saveDetails: boolean;
  setSaveDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const BillingForm = ({
  onSubmit,
  saveDetails,
  setSaveDetails,
  type,
}: BillingFormPropsType) => {
  const initialValues =
    type === "new"
      ? {
          firstName: "",
          lastName: "",
          address: "",
          town: "",
          phoneNumber: "",
        }
      : type === "edit"
        ? {
            ...JSON.parse(localStorage.getItem("billingDetails") as string),
          }
        : null;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    address: Yup.string().required("Address required"),
    town: Yup.string().required("town required"),
    phoneNumber: Yup.number().required("Phone number required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First name</label>
          <Field
            className="bg-gray-100 w-full h-11"
            type="text"
            id="firstName"
            name="firstName"
          />
          <ErrorMessage
            name="firstName"
            className="text-red-600 w-full h-11"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <Field
            className="bg-gray-100 w-full h-11"
            type="text"
            id="lastName"
            name="lastName"
          />
          <ErrorMessage
            className="text-red-600 w-full h-11"
            name="LastName"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field
            className="bg-gray-100 w-full h-11"
            type="text"
            id="address"
            name="address"
          />
          <ErrorMessage
            className="text-red-600 w-full h-11"
            name="address"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="town">Town</label>
          <Field
            className="bg-gray-100 w-full h-11"
            type="text"
            id="town"
            name="town"
          />
          <ErrorMessage
            className="text-red-600 w-full h-11"
            name="town"
            component="div"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone number</label>
          <Field
            className="bg-gray-100 w-full h-11"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
          />
          <ErrorMessage
            className="text-red-600 w-full h-11"
            name="phoneNumber"
            component="div"
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
        <div className="max-w-80 mt-8">
          <Button
            align="default"
            textColor="light"
            type="submit"
            background="red"
          >
            Place Order
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default BillingForm;
