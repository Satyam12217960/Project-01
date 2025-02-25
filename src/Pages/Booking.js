import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Booking.css";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    date: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date: Yup.date().required("Date is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 3000); // Message disappears after 3 sec
  };

  return (
    <div className="booking">
      <header className="header">
        <h1 style={{ marginBottom: "10px" }}>📅 Book Your Chess Tournament</h1>
      </header>

      <section className="form-container">
        <h2 style={{ marginBottom: "15px" }}>Register for an Upcoming Tournament</h2>
        {submitted && <p className="success-message">🎉 Booking Successful!</p>}

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="form">
            <div className="form-group">
              <label>Name:</label>
              <Field type="text" name="name" className="input-box" />
              <ErrorMessage name="name" component="p" className="error" />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <Field type="email" name="email" className="input-box" />
              <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className="form-group">
              <label>Date:</label>
              <Field type="date" name="date" className="input-box" />
              <ErrorMessage name="date" component="p" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default Booking;
