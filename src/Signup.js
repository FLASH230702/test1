import React, { useState } from "react";
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
  const [done, setDone] = useState(true);
  const handleSubmit = (values) => {
    fetch("http://localhost:8000/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then(() => {
      history.push("/profiles");
    });
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
