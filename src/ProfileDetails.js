import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { SignupSchema } from "./Entry";

const ProfileDetails = () => {
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
      history.push("/profiles");
    });
  };
  const handleClick = () => {
    fetch("http://localhost:8000/profiles/" + profiles.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/profiles");
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
              <label>Full Name:</label>
              <Field
                type="text"
                placeholder={profiles?.name}
                name="name"
                autoComplete="off"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <label>Email:</label>
              <Field
                type="text"
                placeholder={profiles?.email}
                name="email"
                autoComplete="off"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label>Mobile No.:</label>
              <Field
                type="text"
                placeholder={profiles?.mobile}
                name="mobile"
                autoComplete="off"
              />
              {errors.mobile && touched.mobile ? (
                <div>{errors.mobile}</div>
              ) : null}
              <label>Password: </label>
              <Field
                type="text"
                placeholder="Password"
                name="password"
                autoComplete="off"
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
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

export default ProfileDetails;
