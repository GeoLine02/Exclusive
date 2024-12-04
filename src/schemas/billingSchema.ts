import * as yup from "yup";

export const billingSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  address: yup.string().required("Address required"),
  townOrCity: yup.string().required("Town or City Requiered"),
  phone: yup.number().required("Phone number required"),
});
