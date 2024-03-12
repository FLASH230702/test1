import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./Signup";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
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
            name: profile.name,
            mobile: profile.mobile,
            gender: profile.gender,
            email: profile.email,
          }));
          setUsers(usersArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);
  const filteredProductsArray = users.filter(
    (profile) => profile.id === Number(id)
  );

  const data_names = filteredProductsArray.map((profile) => profile.name);
  const data_email = filteredProductsArray.map((profile) => profile.email);
  const data_mobile = filteredProductsArray.map((profile) => profile.mobile);
  const data_username = filteredProductsArray.map(
    (profile) => profile.username
  );
  const data_password = filteredProductsArray.map(
    (profile) => profile.password
  );
  const data_gender = filteredProductsArray.map((profile) => profile.gender);

  const handleSubmit = (values) => {
    set(ref(db, "profiles/" + id), {
      email: values.email.toString(),
      gender: values.gender.toString(),
      mobile: values.mobile.toString(),
      name: values.name.toString(),
      password: values.password.toString(),
      username: values.username.toString(),
    });
    history.push("/home");
  };
  const handleClick = () => {};

  return (
    <div className="profile-details">
      {edit && (
        <article>
          <h2>{data_names}</h2>
          <h4>Email: </h4>
          <p>{data_email}</p>
          <h4>Mobile Number: </h4>
          <p>{data_mobile}</p>
          <h4>Username: </h4>
          <p>{data_username}</p>
          <h4>Password: </h4>
          <p>{data_password}</p>
          <h3>Gender:</h3>
          <p>{data_gender}</p>
          <button onClick={handleClick}>Delete</button>
          <button onClick={() => setEdit(false)}>Edit</button>
        </article>
      )}

      {!edit && (
        <Formik
          initialValues={{
            name: "",
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
              <label>
                Full Name:{" "}
                {errors.name && touched.name ? (
                  <sub style={{ color: "red" }}>{errors.name}</sub>
                ) : null}
              </label>
              <Field
                type="text"
                name="name"
                placeholder={data_names}
                autoComplete="off"
              />

              <label>
                Email:{" "}
                {errors.email && touched.email ? (
                  <sub style={{ color: "red" }}>{errors.email}</sub>
                ) : null}
              </label>
              <Field
                type="text"
                name="email"
                placeholder={data_email}
                autoComplete="off"
              />

              <label>
                Mobile No.:{" "}
                {errors.mobile && touched.mobile ? (
                  <sub style={{ color: "red" }}>{errors.mobile}</sub>
                ) : null}
              </label>
              <Field
                type="text"
                name="mobile"
                placeholder={data_mobile}
                autoComplete="off"
              />
              <label>
                Username:{" "}
                {errors.username && touched.username ? (
                  <sub style={{ color: "red" }}>{errors.username}</sub>
                ) : null}
              </label>
              <Field
                type="text"
                name="username"
                placeholder={data_username}
                autoComplete="off"
              />
              <label>
                Password:{" "}
                {errors.password && touched.password ? (
                  <sub style={{ color: "red" }}>{errors.password}</sub>
                ) : null}
              </label>
              <Field
                type="text"
                name="password"
                placeholder={data_password}
                autoComplete="off"
              />

              <label>Gender:</label>
              <Field as="select" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <button type="submit">Done</button>
              <button type="button" onClick={() => setEdit(true)}>
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Profile;
