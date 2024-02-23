import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const phoneRegex = "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";
const emailRegex =
  '(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name Should be at least 2 characters")
    .max(50, "Name is too long")
    .required("This is a Required Field"),
  email: Yup.string()
    .matches(emailRegex, "Email is not valid")
    .required("This is a Required Field"),
  mobile: Yup.string()
    .matches(phoneRegex, "Mobile Number is not valid")
    .required("This is a Required Field"),
});

const Entry = (props) => {
  const history = useHistory();
  const handleSubmit = (values) => {
    fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then(() => {
      history.push("/profiles");
    });
  };

  return (
    <div className="entry">
      <h2>New User Application</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          gender: "Male",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Full Name:</label>
            <Field
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label>Email:</label>
            <Field
              type="text"
              placeholder="Email Id"
              name="email"
              autoComplete="off"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>Mobile No.:</label>
            <Field
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              autoComplete="off"
            />
            {errors.mobile && touched.mobile ? (
              <div>{errors.mobile}</div>
            ) : null}
            <label>Gender:</label>
            <Field as="select" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <button type="submit">Create Profile</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Entry;
