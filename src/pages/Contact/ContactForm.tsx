 

import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";
import type { FormikHelpers } from "formik";

// Assuming InputComponent is a custom wrapper around <input />
import InputComponent from "../../components/InputComponent/InputComponent";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Numbers only")
      .min(7, "Min 7 digits")
      .required("Required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Please enter a message"),
  });

  const handleSubmitForm = (
    values: {
      email: string;
      username: string;
      number: string;
      subject: string;
      message: string;
    },
    {
      resetForm,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      username: string;
      number: string;
      subject: string;
      message: string;
    }>
  ) => {
    emailjs
      .send(
        "service_wu1qfte",
        "template_d4e8nji",
        {
          from_name: values.username,
          from_email: values.email,
          subject: values.subject,
          phone: values.number,
          message: values.message,
        },
        "8uZ-MXEwIJo5TW-0O"
      )
      .then(() => {
        toast.success("Message Sent Successfully!");
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        toast.error("Failed to send message.");
        setSubmitting(false);
      });
  };

  return (
    <section className={styles.wrapper}>
      <ToastContainer transition={Bounce} />
      <div className={styles.container}>
        {/* Left Side: Image */}
        <div className={styles.imageSection}>
          <img
            src="https://renome.pk//wp-content/uploads/2024/09/livingroom.jpg"
            alt="Interior Decor"
            className={styles.mainImg}
          />
        </div>

        {/* Right Side: Form */}
        <div className={styles.formSection}>
          <div className={styles.header}>
            <div className={styles.iconPlaceholder}>
              {/* Furniture Icon SVG */}
              {/* <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#975437"
                strokeWidth="1"
              >
                <path d="M3 13h18M5 13v6m14-6v6M7 13V9a2 2 0 012-2h6a2 2 0 012 2v4" />
              </svg> */}
              <img
                src="https://i.ibb.co/JFnNkxqQ/download-3-artguru.png"
                alt=""
                className={styles.iconImage}
              />
            </div>
            <h2>Get in Touch</h2>
            <p>
              We're here to address your inquiries, feedback, and partnership
              opportunities promptly and effectively.
            </p>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              number: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Full Name</label>
                  <InputComponent
                    placeholder="Enter your full name"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    error={touched.username ? errors.username : ""}
                    label="Name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Email</label>
                  <InputComponent
                    placeholder="Enter your email address"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    error={touched.email ? errors.email : ""}
                    label="Email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone No.</label>
                  <InputComponent
                    placeholder="Type your phone number"
                    value={values.number}
                    onChangeText={handleChange("number")}
                    onBlur={handleBlur("number")}
                    error={touched.number ? errors.number : ""}
                    label="Number"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Subject</label>
                  <InputComponent
                    placeholder="Payment Problem"
                    value={values.subject}
                    onChangeText={handleChange("subject")}
                    onBlur={handleBlur("subject")}
                    error={touched.subject ? errors.subject : ""}
                    label="Subject"
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label>Your Message</label>
                  <InputComponent
                    isMultiline
                    placeholder="Type your message"
                    value={values.message}
                    onChangeText={handleChange("message")}
                    onBlur={handleBlur("message")}
                    error={touched.message ? errors.message : ""}
                    label="Message"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
