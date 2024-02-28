import React from "react";
import "boxicons";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {
  var errormsgs = "";
  const history = useHistory();
  const { data: profiles } = useFetch("http://localhost:8000/profiles/");

  const handleSubmit = (values) => {
    profiles.map((profile) => {
      if (
        values.username === profile.username &&
        values.password === profile.password
      ) {
        history.push("/profiles/" + profile.id);
      } else if (
        values.username === "admin" &&
        values.password === "admin123"
      ) {
        history.push("/home");
      }
      return (errormsgs = "The entered Username or password is incorrect");
    });
  };

  const SignInSchema = Yup.object().shape({
    username: Yup.string().required("Username Cannot be Empty"),
    password: Yup.string().required("Password Cannot be Empty"),
  });

  return (
    <div className="sign">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              Username:{" "}
              {errors.username && touched.username ? (
                <sub style={{ color: "red" }}>{errors.username}</sub>
              ) : null}
            </label>
            <Field type="text" name="username" autocomplete="off" />
            <i class="bx bx-low-vision"></i>
            <label>
              Password:{" "}
              {errors.password && touched.password ? (
                <sub style={{ color: "red" }}>{errors.password}</sub>
              ) : null}
            </label>
            <Field type="password" name="password" autocomplete="off" />

            <button type="submit">Sign In</button>
            <p style={{ marginTop: "20px" }}>
              Not a Member?<a href="/signup"> Sign Up</a>
            </p>

            <h4>{errormsgs}</h4>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
