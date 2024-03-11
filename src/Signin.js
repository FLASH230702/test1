import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { change, Signin } from "./redux/counter";
import * as Yup from "yup";
import { useHistory, Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

const SignIn = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "profiles");

      onValue(dbRef, (snapshot) => {
        const profiles = snapshot.val();

        if (profiles) {
          const usersArray = Object.values(profiles).map((profile) => ({
            id: profile.id,
            username: profile.username,
            password: profile.password,
          }));
          setUsers(usersArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  const handleSubmit = (values) => {
    const user = users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );

    if (user) {
      history.push(`/profile/${user.id}`);
      dispatch(change(user.id));
    } else {
      alert("The entered Username or password is incorrect");
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
            <Field type="text" name="username" autoComplete="off" />
            <label>
              Password:{" "}
              {errors.password && touched.password ? (
                <sub style={{ color: "red" }}>{errors.password}</sub>
              ) : null}
            </label>
            <Field type="password" name="password" autoComplete="off" />

            <button type="submit" onClick={() => dispatch(Signin())}>
              Sign In
            </button>
            <p style={{ marginTop: "20px" }}>
              Not a Member?<Link to="/signup"> Sign Up</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
