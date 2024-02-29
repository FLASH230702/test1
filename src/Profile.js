import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./Signup";

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const { id } = useParams();
  const { data: profiles } = useFetch("http://localhost:8000/profiles/" + id);
  const history = useHistory();
  const dataToValidate = {
    name: profiles?.name,
    email: profiles?.email,
    mobile: profiles?.mobile,
  };

  SignupSchema.isValid(dataToValidate);

  const handleSubmit = (values) => {
    fetch("http://localhost:8000/profiles/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then(() => {
      history.push("/profile");
    });
  };
  const handleClick = () => {
    fetch("http://localhost:8000/profiles/" + profiles.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/profile");
    });
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="profile-details">
      {edit && (
        <article>
          <h2>{profiles?.name}</h2>
          <h4>Email: </h4>
          <p>{profiles?.email}</p>
          <h4>Mobile Number: </h4>
          <p>{profiles?.mobile}</p>
          <h4>Password: </h4>
          <p>{profiles?.password}</p>
          <h3>Gender:</h3>
          <p>{profiles?.gender}</p>
          <button onClick={handleClick}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
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
                placeholder={profiles?.name}
                name="name"
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
                placeholder={profiles?.email}
                name="email"
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
                placeholder={profiles?.mobile}
                name="mobile"
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
                placeholder={profiles?.password}
                name="password"
                autoComplete="off"
              />

              <label>Gender:</label>
              <Field as="select" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              {!edit && <button type="submit">Done</button>}
              {!edit && <button onClick={handleEdit}>Cancel</button>}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Profile;
