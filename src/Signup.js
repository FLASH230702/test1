import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

const phoneRegex = "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";
const emailRegex =
  '(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))';
export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name Should be at least 2 characters")
    .max(50, "Name is too long")
    .required("This is a Required Field"),
  username: Yup.string()
    .required("This is a required Field")
    .min(2, "Username Should be at least 2 characters long"),
  email: Yup.string()
    .matches(emailRegex, "Email is not valid")
    .required("This is a Required Field"),
  mobile: Yup.string()
    .matches(phoneRegex, "Mobile Number is not valid")
    .required("This is a Required Field"),
  password: Yup.string()
    .required("This is a Required Field")
    .min(8, "Password should have Minimum 8 Characters")
    .max(30, "Password is too long"),
});

const Signup = (props) => {
  const history = useHistory();
  const cart = {};
  const [done, setDone] = useState(true);
  const date = new Date();
  const keyID = date.getTime() + Math.floor(Math.random() * 1000);
  const handleSubmit = (values) => {
    set(ref(db, `profiles/${keyID}`), {
      cart: cart,
      email: values.email.toString(),
      gender: values.gender.toString(),
      id: keyID,
      mobile: values.mobile.toString(),
      name: values.name.toString(),
      password: values.password.toString(),
      username: values.username.toString(),
    });
    history.push("/home");
  };
  const handleNext = () => {
    setDone(false);
  };
  const handleBack = () => {
    setDone(true);
  };
  return (
    <div className="entry">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          mobile: "",
          password: "",
          gender: "Male",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {done && (
              <label>
                Full Name:{" "}
                {errors.name && touched.name ? (
                  <sub style={{ color: "red" }}>{errors.name}</sub>
                ) : null}
              </label>
            )}
            {done && (
              <Field
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
              />
            )}

            {done && (
              <label>
                Email:{" "}
                {errors.email && touched.email ? (
                  <sub style={{ color: "red" }}>{errors.email}</sub>
                ) : null}
              </label>
            )}
            {done && (
              <Field
                type="text"
                placeholder="Email Id"
                name="email"
                autoComplete="off"
              />
            )}
            {done && (
              <label>
                Mobile No.:{" "}
                {errors.mobile && touched.mobile ? (
                  <sub style={{ color: "red" }}>{errors.mobile}</sub>
                ) : null}
              </label>
            )}
            {done && (
              <Field
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                autoComplete="off"
              />
            )}

            {done && <label>Gender:</label>}
            {done && (
              <Field as="select" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
            )}
            {!done && (
              <label>
                Username:{" "}
                {errors.username && touched.username ? (
                  <sub style={{ color: "red" }}>{errors.username}</sub>
                ) : null}
              </label>
            )}
            {!done && (
              <Field
                type="text"
                placeholder="Username"
                name="username"
                autoComplete="off"
              />
            )}
            {!done && (
              <label>
                Password:{" "}
                {errors.password && touched.password ? (
                  <sub style={{ color: "red" }}>{errors.password}</sub>
                ) : null}
              </label>
            )}
            {!done && (
              <Field
                type="text"
                placeholder="Password"
                name="password"
                autoComplete="off"
              />
            )}
            {done && <button onClick={handleNext}>Next</button>}
            {!done && <button type="submit">Sign Up</button>}
            {!done && <button onClick={handleBack}>Back</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
