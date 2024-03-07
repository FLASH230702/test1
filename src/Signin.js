import React from "react";
import "boxicons";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Signin, change } from "./redux/counter";
import * as Yup from "yup";
import useFetch from "./useFetch";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {
  const dispatch = useDispatch();
  var errormsgs = "";
  const history = useHistory();
  const { data: profiles } = useFetch("http://localhost:8000/profiles");

  const handleSubmit = (values) => {
    let found = false;

    profiles.forEach((profile) => {
      if (
        values.username === profile.username &&
        values.password === profile.password
      ) {
        found = true;
        history.push(`/profile/${profile.id}`);
        dispatch(change(profile.id));
      }
    });

    if (!found) {
      if (values.username === "admin" && values.password === "admin123") {
        history.push("/profilelist");
      } else {
        console.error("The entered Username or password is incorrect");
      }
    }
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

            <button type="submit" onClick={() => dispatch(Signin())}>
              Sign In
            </button>
            <p style={{ marginTop: "20px" }}>
              Not a Member?<Link to="/signup"> Sign Up</Link>
            </p>

            <h4>{errormsgs}</h4>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
